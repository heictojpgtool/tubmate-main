// File: src/app/api/proxy-video/route.js
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const maxDuration = 300; // 5 minutes timeout

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const videoUrl = searchParams.get('url');
        
        if (!videoUrl) {
            console.error('❌ No URL provided');
            return NextResponse.json({ error: 'No URL provided' }, { status: 400 });
        }

        console.log('🎬 Proxying video:', videoUrl);

        // Fetch video from Twitter with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 second timeout

        try {
            const response = await fetch(videoUrl, {
                signal: controller.signal,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    'Accept': '*/*',
                    'Accept-Language': 'en-US,en;q=0.9',
                    'Referer': 'https://twitter.com/',
                    'Origin': 'https://twitter.com',
                },
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                console.error('❌ Failed to fetch video:', response.status, response.statusText);
                return NextResponse.json({ 
                    error: `Failed to fetch video: ${response.status} ${response.statusText}` 
                }, { status: response.status });
            }

            console.log('✅ Video response received');
            console.log('Content-Type:', response.headers.get('content-type'));
            console.log('Content-Length:', response.headers.get('content-length'));

            // Get video as array buffer
            const arrayBuffer = await response.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            
            console.log('✅ Video downloaded, size:', buffer.length, 'bytes');

            // Return video with proper headers
            return new NextResponse(buffer, {
                status: 200,
                headers: {
                    'Content-Type': 'video/mp4',
                    'Content-Length': buffer.length.toString(),
                    'Content-Disposition': `attachment; filename="twitter-video-${Date.now()}.mp4"`,
                    'Cache-Control': 'public, max-age=31536000',
                    'Accept-Ranges': 'bytes',
                    'Access-Control-Allow-Origin': '*',
                },
            });

        } catch (fetchError) {
            clearTimeout(timeoutId);
            
            if (fetchError.name === 'AbortError') {
                console.error('❌ Request timeout');
                return NextResponse.json({ error: 'Request timeout' }, { status: 408 });
            }
            
            throw fetchError;
        }

    } catch (error) {
        console.error('💥 Proxy error:', error);
        console.error('Error details:', {
            name: error.name,
            message: error.message,
            stack: error.stack
        });
        
        return NextResponse.json({ 
            error: 'Failed to proxy video',
            details: error.message 
        }, { status: 500 });
    }
}

export async function OPTIONS(request) {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Range',
            'Access-Control-Max-Age': '86400',
        },
    });
}