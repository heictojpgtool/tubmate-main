import "./how-to-use.css";

export const metadata = {
  title: "How to Download Twitter Videos – Step-by-Step Guide | TwitterVideoDownload",
  description:
    "Learn how to download Twitter videos and GIFs in HD quality for free. Simple 3-step guide – paste the tweet URL, click download, and save your video instantly.",
  keywords:
    "how to download twitter videos, twitter video downloader guide, download x videos, save twitter videos, download twitter gif",
  alternates: {
    canonical: "https://twittervideodownload.com.in/how-to-use",
  },
  openGraph: {
    title: "How to Download Twitter Videos – Step-by-Step Guide",
    description:
      "Simple 3-step guide to download Twitter/X videos and GIFs in HD quality for free.",
    url: "https://twittervideodownload.com.in/how-to-use",
    siteName: "Twitter Video Downloader",
    type: "article",
  },
};

export default function HowToUsePage() {
  return (
    <main className="htu-main">
      {/* ── Hero ── */}
      <section className="htu-hero">
        <h1>
          How to <span>Download Twitter Videos</span>
        </h1>
        <p className="htu-sub">
          Download any Twitter or X video in HD quality for free — no account,
          no app, no hassle. Follow these simple steps.
        </p>
      </section>

      {/* ── Steps ── */}
      <section className="htu-steps-section">
        <div className="htu-steps">
          <div className="htu-step-card">
            <div className="htu-step-num">1</div>
            <div className="htu-step-icon">🔗</div>
            <h2>Copy the Tweet URL</h2>
            <p>
              Open Twitter or X app on your phone or desktop. Find the video
              tweet you want to download. Tap the <strong>Share</strong> button
              and select <strong>Copy Link</strong>, or copy the URL from your
              browser address bar.
            </p>
            <div className="htu-tip">
              <strong>Tip:</strong> Works with twitter.com and x.com links.
            </div>
          </div>

          <div className="htu-step-card">
            <div className="htu-step-num">2</div>
            <div className="htu-step-icon">📋</div>
            <h2>Paste the URL</h2>
            <p>
              Go to{" "}
              <a href="https://twittervideodownload.com.in">
                twittervideodownload.com.in
              </a>{" "}
              and paste the copied tweet URL into the input box on the homepage.
              You can use the <strong>Paste</strong> button for quick access.
            </p>
            <div className="htu-tip">
              <strong>Tip:</strong> Make sure the tweet contains a video or GIF.
            </div>
          </div>

          <div className="htu-step-card">
            <div className="htu-step-num">3</div>
            <div className="htu-step-icon">⬇️</div>
            <h2>Download Your Video</h2>
            <p>
              Click the <strong>Download</strong> button. Choose your preferred
              quality — SD, HD, or Full HD — and the video will be saved
              directly to your device.
            </p>
            <div className="htu-tip">
              <strong>Tip:</strong> On mobile, hold the download button and
              select "Save Video".
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="htu-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="htu-faq-list">
          <details>
            <summary>Can I download Twitter GIFs?</summary>
            <p>
              Yes! Our tool supports Twitter GIFs. They are downloaded as MP4
              files since Twitter converts all GIFs to video format internally.
            </p>
          </details>
          <details>
            <summary>Does it work on iPhone and Android?</summary>
            <p>
              Absolutely. Our Twitter video downloader is fully mobile-friendly
              and works on all browsers including Safari on iOS and Chrome on
              Android.
            </p>
          </details>
          <details>
            <summary>Is there a video size or length limit?</summary>
            <p>
              No limits. You can download any Twitter video regardless of
              duration or file size, completely free.
            </p>
          </details>
          <details>
            <summary>Do I need to create an account?</summary>
            <p>
              No account or registration required. Just paste the URL and
              download — it's 100% free.
            </p>
          </details>
          <details>
            <summary>What video qualities are available?</summary>
            <p>
              We offer all available qualities provided by Twitter: SD (360p),
              HD (720p), and Full HD (1080p) where available. Quality depends on
              the original upload.
            </p>
          </details>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="htu-cta">
        <h2>Ready to Download?</h2>
        <p>Start downloading Twitter videos for free — no sign-up needed.</p>
        <a href="/" className="htu-cta-btn">
          Go to Downloader →
        </a>
      </section>
    </main>
  );
}