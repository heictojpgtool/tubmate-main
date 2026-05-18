"use client";

import { useState, memo } from "react";
import "./home.css";

// ── URL validation regex
const TWITTER_REGEX =
  /^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/.+\/status\/\d+/i;

// ── Memoized static sections (prevent unnecessary re-renders)
const HowToSection = memo(function HowToSection() {
  return (
    <section className="how-to">
      <h2>How to Download Twitter Videos</h2>
      <p className="how-sub">It only takes 3 simple steps</p>
      <div className="steps">
        <div className="step-card">
          <div className="step-icon">🔍</div>
          <h3>Step 1: Find the Tweet</h3>
          <p>
            Open Twitter or X and find the video or GIF tweet you want to save.
            Any public tweet containing a video will work.
          </p>
        </div>
        <div className="step-card">
          <div className="step-icon">🔗</div>
          <h3>Step 2: Copy the Link</h3>
          <p>
            Tap the Share button on the tweet and select{" "}
            <strong>Copy link</strong>, or copy the full URL directly from your
            browser's address bar.
          </p>
        </div>
        <div className="step-card">
          <div className="step-icon">⬇</div>
          <h3>Step 3: Paste & Download</h3>
          <p>
            Paste the copied URL into the box above, click Download, choose your
            preferred quality, and save the file to your device.
          </p>
        </div>
      </div>
    </section>
  );
});

const WhyUseSection = memo(function WhyUseSection() {
  return (
    <section className="why-use">
      <h2>Why Use Our Downloader?</h2>
      <p className="why-sub">The fastest and easiest way to save Twitter videos</p>
      <div className="why-grid">
        {[
          { icon: "⬇", title: "Free & Unlimited", desc: "No limits, no sign-up, completely free forever." },
          { icon: "🎥", title: "Multiple Qualities", desc: "Download in HD (1080p), SD, or original quality." },
          { icon: "🔒", title: "Safe & Private", desc: "We never store videos or track user activity." },
          { icon: "𝕏", title: "X.com Support", desc: "Works with both twitter.com and x.com links." },
          { icon: "GIF", title: "GIF Downloads", desc: "Twitter GIFs converted to MP4 automatically." },
          { icon: "✔", title: "No Watermark", desc: "Original video with zero watermarks or branding." },
          { icon: "📱", title: "All Devices", desc: "Works on iPhone, Android, Windows, and Mac." },
          { icon: "⚡", title: "Instant Processing", desc: "Videos ready in seconds — no queue, no delays." },
          { icon: "🌐", title: "No Installation", desc: "Open, paste, download — nothing to install." },
        ].map(({ icon, title, desc }) => (
          <div className="why-card" key={title}>
            <div className="why-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

const FAQSection = memo(function FAQSection() {
  const faqs = [
    {
      q: "Is this Twitter video downloader completely free?",
      a: "Yes, 100% free — always. No hidden charges, no premium plans, no download limits. Use it as many times as you want without paying anything or creating an account.",
    },
    {
      q: "Can I download private Twitter videos?",
      a: "No. Our tool only works with public tweets. Private account videos cannot be downloaded. Make sure the tweet is publicly visible before attempting to download.",
    },
    {
      q: "Does it support HD video quality?",
      a: "Yes. When available, you can download Twitter videos in HD up to 1080p. All available resolutions are shown so you can choose the one that best suits your needs.",
    },
    {
      q: "Can I download Twitter GIFs?",
      a: "Absolutely. Twitter GIFs are stored as looping MP4 videos. Our tool retrieves and downloads them as clean MP4 files that play on any device or editing software.",
    },
    {
      q: "Is it legal to download Twitter videos?",
      a: "Downloading for personal offline viewing is generally acceptable. Always respect the creator's copyright and do not redistribute content without their permission.",
    },
    {
      q: "Do you store my videos or personal data?",
      a: "Never. No videos, URLs, or user data are stored on our servers. Everything is processed in real-time and discarded immediately after delivery.",
    },
    {
      q: "Which devices and browsers are supported?",
      a: "All modern devices — Windows, Mac, iPhone, iPad, Android. Works with Chrome, Firefox, Safari, Edge, and Opera. No app or plugin required.",
    },
    {
      q: "Why is my video not downloading?",
      a: "Ensure the tweet is public, the URL is correct, and the tweet contains a video. Deleted tweets will not work. Refresh the page and try again if the issue persists.",
    },
    {
      q: "Does it work with x.com links?",
      a: "Yes. Both twitter.com and x.com URL formats are fully supported. Paste either format and it will work immediately.",
    },
    {
      q: "How do I download Twitter videos on iPhone?",
      a: "Open Twitter or X on your iPhone, tap Share on the tweet, then tap Copy Link. Open Safari, come to this page, paste the URL, and tap Download. Once the video appears, press and hold to save it to your Photos. No extra app needed.",
    },
  ];

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <p className="faq-sub">Got questions? We have answers</p>
      <div className="faq-list">
        {faqs.map(({ q, a }, i) => (
          <details key={q} open={i === 0}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
});

const SEOArticle = memo(function SEOArticle() {
  return (
    <section className="seo-article">
      <div className="seo-inner">
        <h2>
          Twitter Video Downloader — The Complete Guide to Saving Twitter Videos
          for Free
        </h2>

        <p>
          Every day, millions of videos are shared on Twitter and X — from live
          sports reactions and breaking news clips to viral comedy moments, music
          previews, and educational content. But if you have ever tried to save a
          Twitter video directly from the app, you already know the reality: there
          is no built-in download button. Twitter intentionally leaves this feature
          out. That is exactly where our free{" "}
          <strong>Twitter video downloader</strong> fills the gap.
        </p>

        <p>
          Our tool gives you a simple, fast, and completely free way to{" "}
          <strong>download Twitter videos</strong> to any device — phone, tablet,
          or computer. No account needed, no software to install, no watermarks
          added. Just paste the tweet link and download in seconds.
        </p>

        <h3>What Makes a Good Twitter Video Downloader?</h3>
        <p>
          Not all video downloaders are the same. Many tools are slow, full of
          pop-up ads, or ask you to register before doing anything. A reliable{" "}
          <strong>Twitter video downloader</strong> should offer:
        </p>
        <ul>
          <li><strong>Speed:</strong> Your video should be ready in seconds — no unnecessary waiting or queues.</li>
          <li><strong>Quality options:</strong> HD, SD, and original quality available so you can choose based on your needs.</li>
          <li><strong>No watermark:</strong> The downloaded file should be identical to the original, clean and unaltered.</li>
          <li><strong>Privacy:</strong> A trustworthy tool never logs your URLs, stores your videos, or tracks your activity.</li>
          <li><strong>Device compatibility:</strong> Works on Android, iPhone, and desktop without any extra setup.</li>
        </ul>

        <h3>How to Download Twitter Video on Android</h3>
        <p>
          Open the Twitter or X app, find the tweet, and tap the share icon.
          Select <strong>Copy link</strong>. Then open your mobile browser, visit
          this page, paste the link, and tap Download. Choose your quality and
          save directly to your phone storage.
        </p>

        <h3>How to Download Twitter Video on iPhone</h3>
        <p>
          Open Twitter or X on your iPhone, tap Share on the tweet, then tap{" "}
          <strong>Copy Link</strong>. Open Safari, come to this page, paste the
          URL, and tap Download. Once the video appears, press and hold to save it
          to your Photos. For direct file saving, the{" "}
          <strong>Documents by Readdle</strong> app is also a popular choice among
          iPhone users.
        </p>

        <h3>Download Twitter Videos in HD Quality</h3>
        <p>
          If the original tweet was uploaded in HD, our tool automatically detects
          and offers the HD version. After pasting the URL and clicking Download,
          pick the highest available option — typically labeled HD or 1080p. The
          file you receive is untouched, with full original resolution and zero
          compression applied by us.
        </p>

        <h3>Save Twitter GIFs as MP4 Video Files</h3>
        <p>
          Twitter GIFs are stored behind the scenes as silent looping MP4 videos.
          Our <strong>Twitter video downloader</strong> handles them perfectly —
          paste the GIF tweet link and the tool retrieves the underlying MP4 file.
          The result is a clean, high-quality video that plays on any device, media
          player, or editing software without any additional conversion.
        </p>

        <h3>Works with Both Twitter.com and X.com Links</h3>
        <p>
          Since Twitter rebranded to X in 2023, links now come in two formats. Our
          tool fully supports both — whether your URL starts with twitter.com or
          x.com, just paste it and it works immediately. No manual editing of the
          URL is ever needed.
        </p>

        <h3>Is It Safe to Use?</h3>
        <p>
          When you paste a tweet URL and click Download, our server makes a secure
          request to Twitter's servers to retrieve the public video data, then
          sends it directly to your browser. We never ask for your Twitter login,
          we do not inject anything into downloaded files, and we do not retain
          data after your session ends. The tool runs over a secure HTTPS
          connection with no malicious ads or pop-ups.
        </p>

        <h3>Web Tool vs. Browser Extensions</h3>
        <p>
          Browser extensions require access to your full browser activity — a
          significant privacy concern. They also need frequent updates whenever
          Twitter changes its structure. A web-based tool like ours has none of
          these drawbacks. Nothing to install, nothing to update, no permissions
          required. Open, paste, download — works on every browser and device out
          of the box.
        </p>

        <h3>What Types of Twitter Videos Can You Download?</h3>
        <p>
          Our tool works with virtually any publicly accessible video on Twitter or
          X, including:
        </p>
        <ul>
          <li>Sports highlights, match clips, and live game reactions</li>
          <li>News broadcasts, press conferences, and political speeches</li>
          <li>Music videos, concert footage, and artist announcements</li>
          <li>Viral comedy clips and entertainment content</li>
          <li>Educational threads with embedded video explanations</li>
          <li>Animated GIFs and short looping clips</li>
          <li>Travel, lifestyle, and influencer content</li>
          <li>Technology demos and product launch videos</li>
        </ul>

        <h3>Saving Twitter Videos for Offline Viewing</h3>
        <p>
          Whether you are traveling without reliable internet, building a personal
          content archive, or just want to watch something later without
          re-opening the app, having the video saved locally is far more
          convenient. Our <strong>Twitter downloader</strong> makes this possible
          in seconds — no buffering, no dependency on Twitter being online, just
          the file ready on your device whenever you need it.
        </p>

        <h3>Respecting Copyright When You Download Twitter Videos</h3>
        <p>
          Just because a video is publicly viewable does not mean it is free to
          use however you choose. The original creator holds copyright over their
          content. Saving a video for personal viewing is generally acceptable.
          However, re-uploading it to another platform, using it commercially, or
          distributing it without permission violates copyright law and Twitter's
          terms of service. Always credit the original creator when sharing
          downloaded content, and ask permission directly when in doubt.
        </p>

        <h3>Why Our Twitter Video Downloader Stays Free</h3>
        <p>
          We believe useful tools should be accessible to everyone without
          paywalls. Our tool is supported through non-intrusive advertising, which
          keeps every feature free for all users worldwide. We do not sell user
          data, we do not offer a premium tier, and we do not restrict any
          downloads. HD downloads, GIF support, unlimited usage — all of it is
          available to everyone, every time, at no cost.
        </p>

        <p className="seo-note">
          <em>
            Please use this tool responsibly. Only download videos for personal
            use and always respect the intellectual property rights of content
            creators on Twitter and X.
          </em>
        </p>
      </div>
    </section>
  );
});

// ── Main Page Component
export default function Page() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [videoData, setVideoData] = useState(null);

  const handleDownload = async () => {
    setError("");
    setVideoData(null);

    if (!TWITTER_REGEX.test(url.trim())) {
      setError("Please paste a valid Twitter / X video URL");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/twitter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to fetch video");
        return;
      }

      if (Array.isArray(data.variants) && data.variants.length > 0) {
        // Sort by highest bitrate first — best quality on top
        data.variants.sort((a, b) => (b.bitrate || 0) - (a.bitrate || 0));
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

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text.trim());
    } catch {
      setError("Unable to read from clipboard. Please paste manually.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && url.trim()) {
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
          The fastest free online tool to save videos and GIFs from Twitter and
          X — in HD quality, without watermarks, and without creating an account.
        </p>

        <div className="download-box">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Paste Twitter/X video URL here..."
            aria-label="Twitter or X video URL"
            autoFocus
          />
          <button onClick={handlePaste} disabled={loading} className="paste-btn">
            📋 Paste
          </button>
          <button
            onClick={handleDownload}
            disabled={loading || !url.trim()}
            className="download-btn"
            aria-busy={loading}
          >
            {loading ? "⏳ Processing..." : "⬇ Download"}
          </button>
        </div>

        {error && (
          <p className="error-text" role="alert">
            ❌ {error}
          </p>
        )}

        <p className="example">
          Example: https://twitter.com/user/status/123456789
        </p>

        <div className="features-inline">
          <span>✔ No Watermark</span>
          <span>✔ 100% Free</span>
          <span>✔ HD Quality</span>
          <span>✔ No Sign-up</span>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <strong>10M+</strong>
            <span>Videos Downloaded</span>
          </div>
          <div className="stat-item">
            <strong>195+</strong>
            <span>Countries Supported</span>
          </div>
          <div className="stat-item">
            <strong>100%</strong>
            <span>Free Forever</span>
          </div>
          <div className="stat-item">
            <strong>4.9★</strong>
            <span>User Rating</span>
          </div>
        </div>

        {loading && (
          <div className="loading-container">
            <div className="spinner" aria-hidden="true"></div>
            <p className="loading-text">Fetching your video, please wait...</p>
            <div className="skeleton-loader" aria-hidden="true"></div>
          </div>
        )}

        {Array.isArray(videoData?.variants) && videoData.variants.length > 0 && (
          <div className="results">
            <h3>✅ Video Ready to Download</h3>

            <div className="video-preview">
              <video
                controls
                src={videoData.variants[0].url}
                poster={videoData.thumbnail || "/thumbnail.jpg"}
                preload="none"
              >
                Your browser does not support video playback.
              </video>
            </div>

            {videoData.title && (
              <p className="video-title">
                {videoData.title.slice(0, 140)}
              </p>
            )}

            <div className="download-options">
              <h4>Choose Your Quality:</h4>
              {videoData.variants.map((variant, i) => (
                <a
                  key={i}
                  href={variant.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  download
                  className="download-link"
                >
                  <div className="download-info">
                    <span className="download-quality">
                      🎥 {variant.quality || `Quality ${i + 1}`}
                    </span>
                    <span className="download-size">
                      {variant.bitrate
                        ? `${Math.round(variant.bitrate / 1000000)}Mbps`
                        : "Standard"}
                    </span>
                  </div>
                  <span className="download-arrow">⬇ Download</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </section>

      <HowToSection />
      <WhyUseSection />
      <FAQSection />
      <SEOArticle />
    </div>
  );
}