import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { url } = await request.json();
        
        console.log('📥 URL received:', url);
        
        if (!url || (!url.includes('twitter.com') && !url.includes('x.com'))) {
            return NextResponse.json({ 
                success: false,
                error: 'Invalid Twitter URL' 
            }, { status: 400 });
        }

        const tweetId = extractTweetId(url);
        console.log('🆔 Tweet ID:', tweetId);
        
        if (!tweetId) {
            return NextResponse.json({ 
                success: false,
                error: 'Could not extract tweet ID from URL' 
            }, { status: 400 });
        }

        try {
            console.log('🔄 Trying fxtwitter.com API...');
            const fxUrl = `https://api.fxtwitter.com/status/${tweetId}`;
            
            const response = await fetch(fxUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log('📦 FxTwitter Response received');
                
                if (data.tweet && data.tweet.media && data.tweet.media.videos && data.tweet.media.videos.length > 0) {
                    const videos = data.tweet.media.videos;
                    
                    const variants = videos.map((video, index) => ({
                        url: video.url,
                        bitrate: video.bitrate || 0,
                        quality: video.quality || getQualityFromBitrate(video.bitrate)
                    })).sort((a, b) => b.bitrate - a.bitrate);

                    console.log('✅ Video found via FxTwitter!');
                    
                    return NextResponse.json({
                        success: true,
                        video: variants[0].url,
                        thumbnail: data.tweet.media.photos?.[0]?.url || data.tweet.author.avatar_url,
                        title: data.tweet.text || 'Twitter Video',
                        variants: variants
                    });
                }
            }
        } catch (err) {
            console.log('❌ FxTwitter failed:', err.message);
        }

        try {
            console.log('🔄 Trying vxtwitter.com API...');
            const vxUrl = `https://api.vxtwitter.com/Twitter/status/${tweetId}`;
            
            const response = await fetch(vxUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log('📦 VxTwitter Response received');
                
                if (data.media_extended && data.media_extended.length > 0) {
                    const media = data.media_extended[0];
                    
                    if (media.type === 'video' && media.url) {
                        const variants = [{
                            url: media.url,
                            bitrate: 2000000,
                            quality: 'HD'
                        }];

                        console.log('✅ Video found via VxTwitter!');

                        return NextResponse.json({
                            success: true,
                            video: media.url,
                            thumbnail: media.thumbnail_url || '',
                            title: data.text || 'Twitter Video',
                            variants: variants
                        });
                    }
                }
            }
        } catch (err) {
            console.log('❌ VxTwitter failed:', err.message);
        }

        try {
            console.log('🔄 Trying Syndication API...');
            const syndicationUrl = `https://cdn.syndication.twimg.com/tweet-result?id=${tweetId}&lang=en&token=a`;
            
            const response = await fetch(syndicationUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log('📦 Syndication Response received');
                
                if (data.mediaDetails && data.mediaDetails.length > 0) {
                    const media = data.mediaDetails[0];
                    
                    if (media.type === 'video' && media.video_info && media.video_info.variants) {
                        const variants = media.video_info.variants
                            .filter(v => v.content_type === 'video/mp4' && v.url)
                            .map(v => ({
                                url: v.url,
                                bitrate: v.bitrate || 0,
                                quality: getQualityFromBitrate(v.bitrate)
                            }))
                            .sort((a, b) => b.bitrate - a.bitrate);

                        if (variants.length > 0) {
                            console.log('✅ Video found via Syndication API!');
                            
                            return NextResponse.json({
                                success: true,
                                video: variants[0].url,
                                thumbnail: media.media_url_https || '',
                                title: data.text || 'Twitter Video',
                                variants: variants
                            });
                        }
                    }
                }
            }
        } catch (err) {
            console.log('❌ Syndication API failed:', err.message);
        }

        try {
            console.log('🔄 Trying FixTweet API...');
            const fixTweetUrl = `https://api.fixtweet.com/status/${tweetId}`;
            
            const response = await fetch(fixTweetUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log('📦 FixTweet Response received');
                
                if (data.tweet && data.tweet.media && data.tweet.media.videos && data.tweet.media.videos.length > 0) {
                    const videos = data.tweet.media.videos;
                    
                    const variants = videos.map((video) => ({
                        url: video.url,
                        bitrate: video.bitrate || 0,
                        quality: video.quality || getQualityFromBitrate(video.bitrate)
                    })).sort((a, b) => b.bitrate - a.bitrate);

                    console.log('✅ Video found via FixTweet!');
                    
                    return NextResponse.json({
                        success: true,
                        video: variants[0].url,
                        thumbnail: data.tweet.media.photos?.[0]?.url || '',
                        title: data.tweet.text || 'Twitter Video',
                        variants: variants
                    });
                }
            }
        } catch (err) {
            console.log('❌ FixTweet failed:', err.message);
        }

        console.log('❌ All methods failed - No video found');
        return NextResponse.json({ 
            success: false,
            error: 'No video found. The tweet may be private, deleted, or does not contain a video.' 
        }, { status: 404 });

    } catch (error) {
        console.error('💥 Server Error:', error);
        return NextResponse.json({ 
            success: false,
            error: 'Server error occurred. Please try again.' 
        }, { status: 500 });
    }
}

function extractTweetId(url) {
    const cleanUrl = url.split('?')[0].split('#')[0];
    
    const patterns = [
        /twitter\.com\/\w+\/status\/(\d+)/,           // twitter.com/user/status/123
        /x\.com\/\w+\/status\/(\d+)/,                 // x.com/user/status/123
        /twitter\.com\/.*\/statuses\/(\d+)/,          // twitter.com/.../statuses/123
        /\/status\/(\d+)/,                             // /status/123
        /\/statuses\/(\d+)/,                           // /statuses/123
        /(\d{15,})/                                    // Just a long number (tweet IDs are ~19 digits)
    ];
    
    for (const pattern of patterns) {
        const match = cleanUrl.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }
    
    return null;
}

function getQualityFromBitrate(bitrate) {
    if (!bitrate || bitrate === 0) return 'Standard';
    
    const kbps = bitrate / 1000;
    const mbps = bitrate / 1000000;
    
    if (bitrate >= 2000000) return '1080p Full HD';
    if (bitrate >= 1500000) return '720p HD';
    if (bitrate >= 1000000) return '720p';
    if (bitrate >= 500000) return '480p';
    if (bitrate >= 200000) return '360p';
    
    return `${Math.round(kbps)}kbps`;
}