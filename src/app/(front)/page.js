"use client";

import { useState } from "react";
import "./home.css";

export default function Page() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [videoData, setVideoData] = useState(null);

  const handleDownload = async () => {
    setError("");
    setVideoData(null);

    if (!url || (!url.includes("twitter.com") && !url.includes("x.com"))) {
      setError("Please paste a valid Twitter / X video URL");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/twitter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to fetch video");
        return;
      }

      // ✅ Check if video data exists
      if (data.success && data.variants && data.variants.length > 0) {
        setVideoData(data);
      } else {
        setError("No video found in this tweet");
      }
    } catch (err) {
      setError("Server error, please try again");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Paste button handler
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      setError("Unable to read from clipboard. Please paste manually.");
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && url) {
      handleDownload();
    }
  };

  return (
    <div className="home">
      <section className="hero-downloader">
        <h1>
          Download <span>Twitter Videos & GIFs</span>
        </h1>

        <p className="hero-sub">
          Free online tool to download videos and GIFs from Twitter/X in HD quality.
          No watermark, no registration required.
        </p>

        <div className="download-box">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Paste Twitter/X video URL here..."
          />
          <button onClick={handlePaste} disabled={loading} className="paste-btn">
            📋 Paste
          </button>
          <button onClick={handleDownload} disabled={loading || !url} className="download-btn">
            {loading ? "⏳ Processing..." : "⬇ Download"}
          </button>
        </div>

        {error && <p className="error-text">❌ {error}</p>}

        <p className="example">
          Example: https://twitter.com/user/status/123456789
        </p>

        <div className="features-inline">
          <span>✔ No Watermark</span>
          <span>✔ 100% Free</span>
          <span>✔ HD Quality</span>
          <span>✔ No Sign-up</span>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Fetching video...</p>
          </div>
        )}

        {/* ✅ Video Display Section */}
        {videoData && videoData.variants && videoData.variants.length > 0 && (
          <div className="results">
            <h3>✅ Video Ready to Download</h3>
            
            {/* Video Preview */}
            <div className="video-preview">
              <video 
                controls 
                src={videoData.variants[0].url} 
                poster={videoData.thumbnail}
                preload="metadata"
              >
                Your browser does not support video playback.
              </video>
            </div>

            <p className="video-title">{videoData.title}</p>

            {/* Download Links */}
            <div className="download-options">
              <h4>Choose Quality:</h4>
              {videoData.variants.map((variant, i) => (
                <a
                  key={i}
                  href={variant.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="download-link"
                >
                  <div className="download-info">
                    <span className="download-quality">
                      🎥 {variant.quality || `Quality ${i + 1}`}
                    </span>
                    <span className="download-size">
                      {variant.bitrate ? `${Math.round(variant.bitrate / 1000000)}Mbps` : 'Standard'}
                    </span>
                  </div>
                  <span className="download-arrow">⬇ Download</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="how-to">
        <h2>How to Download Twitter Videos</h2>
        <p className="how-sub">It only takes 3 simple steps</p>

        <div className="steps">
          <div className="step-card">
            <div className="step-icon">🔍</div>
            <h3>Step 1: Find the Tweet</h3>
            <p>Open Twitter/X and find the video or GIF tweet you want to download.</p>
          </div>

          <div className="step-card">
            <div className="step-icon">🔗</div>
            <h3>Step 2: Copy the Link</h3>
            <p>Click Share → Copy link to tweet, or copy the URL from your browser.</p>
          </div>

          <div className="step-card">
            <div className="step-icon">⬇</div>
            <h3>Step 3: Paste & Download</h3>
            <p>Paste the URL above, click Download, and choose your quality.</p>
          </div>
        </div>
      </section>

      <section className="why-use">
        <h2>Why Use Our Downloader?</h2>
        <p className="why-sub">
          The fastest and easiest way to save Twitter videos
        </p>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">⬇</div>
            <h3>Free & Unlimited</h3>
            <p>No limits, no sign-up, completely free forever.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">🎥</div>
            <h3>Multiple Qualities</h3>
            <p>Download videos in HD, SD or original quality.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">🔒</div>
            <h3>Safe & Private</h3>
            <p>We never store videos or track user activity.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">𝕏</div>
            <h3>X.com Support</h3>
            <p>Works with both twitter.com & x.com links.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">GIF</div>
            <h3>GIF Downloads</h3>
            <p>Twitter GIFs are converted to MP4 files.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">✔</div>
            <h3>No Watermark</h3>
            <p>Original video without any branding.</p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-sub">Got questions? We've got answers</p>

        <div className="faq-list">
          <details open>
            <summary>Is this Twitter downloader free?</summary>
            <p>Yes, it's 100% free with no limits on downloads.</p>
          </details>

          <details>
            <summary>Can I download private videos?</summary>
            <p>No, only public tweets are supported. Private account videos cannot be downloaded.</p>
          </details>

          <details>
            <summary>Does it support HD videos?</summary>
            <p>Yes, you can download videos in multiple qualities including HD and Full HD (up to 1080p).</p>
          </details>

          <details>
            <summary>Can I download GIFs?</summary>
            <p>Yes, Twitter GIFs are automatically converted and saved as MP4 video files.</p>
          </details>

          <details>
            <summary>Is it legal to download Twitter videos?</summary>
            <p>Downloading for personal use is generally okay, but respect copyright laws and don't redistribute without permission.</p>
          </details>

          <details>
            <summary>Do you store my videos or data?</summary>
            <p>No, we don't store any videos or user data. Everything is processed in real-time.</p>
          </details>

          <details>
            <summary>Which devices are supported?</summary>
            <p>Works on all devices - Windows, Mac, Linux, Android, iPhone, iPad. Just need a web browser!</p>
          </details>

          <details>
            <summary>Why isn't my video downloading?</summary>
            <p>Make sure the tweet is public, contains a video, and the URL is correct. Deleted tweets won't work.</p>
          </details>
        </div>
      </section>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #1DA1F2;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
          margin: 0 auto;
        }

        .loading-container {
          text-align: center;
          padding: 30px;
          background: #f8f9fa;
          border-radius: 12px;
          margin-top: 20px;
        }

        .loading-text {
          margin-top: 15px;
          color: #1DA1F2;
          font-weight: 500;
        }

        .download-box {
          display: flex;
          gap: 10px;
          max-width: 700px;
          margin: 30px auto;
          flex-wrap: wrap;
        }

        .download-box input {
          flex: 1;
          min-width: 250px;
          padding: 15px 20px;
          border: 2px solid #e1e8ed;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.3s;
        }

        .download-box input:focus {
          outline: none;
          border-color: #1DA1F2;
        }

        .paste-btn, .download-btn {
          padding: 15px 25px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .paste-btn {
          background: #f5f8fa;
          color: #14171a;
        }

        .paste-btn:hover:not(:disabled) {
          background: #e1e8ed;
        }

        .download-btn {
          background: #1DA1F2;
          color: white;
        }

        .download-btn:hover:not(:disabled) {
          background: #1a91da;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(29, 161, 242, 0.3);
        }

        .paste-btn:disabled, .download-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .error-text {
          color: #e0245e;
          margin-top: 15px;
          font-weight: 500;
          padding: 12px 20px;
          background: #fff5f7;
          border-radius: 8px;
          border-left: 4px solid #e0245e;
        }

        .results {
          margin-top: 40px;
          padding: 30px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .results h3 {
          color: #17bf63;
          margin-bottom: 20px;
          font-size: 24px;
        }

        .video-preview {
          margin: 20px 0;
        }

        .video-preview video {
          width: 100%;
          max-width: 600px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .video-title {
          color: #657786;
          font-size: 14px;
          margin: 15px 0;
          padding: 10px;
          background: #f5f8fa;
          border-radius: 8px;
        }

        .download-options h4 {
          margin: 25px 0 15px 0;
          color: #14171a;
          font-size: 18px;
        }

        .download-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          margin: 10px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.3s;
        }

        .download-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .download-info {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .download-quality {
          font-weight: 600;
          font-size: 16px;
        }

        .download-size {
          font-size: 13px;
          opacity: 0.9;
        }

        .download-arrow {
          font-weight: 600;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .download-box {
            flex-direction: column;
          }

          .download-box input,
          .paste-btn,
          .download-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}