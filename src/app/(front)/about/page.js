import Link from "next/link";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us – Twitter Video Downloader",
  description: "Learn about Twitter Video Downloader — a free, fast, and private tool to save Twitter/X videos.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <h1>
          About <span>Us</span>
        </h1>
        <p>
          We built Twitter Video Downloader to make saving your favorite
          Twitter/X videos simple, fast, and completely free — no sign-up
          required.
        </p>
      </section>

      {/* Content */}
      <section className={styles.policyBody}>
        <div className={styles.policyInner}>

          {/* Mission */}
          <h2>Our Mission</h2>
          <p>
            Twitter Video Downloader exists for one reason: to give you a
            quick, reliable, and private way to save videos from Twitter/X.
            Whether it's a viral clip, a tutorial, a news segment, or a funny
            moment you want to keep — we make it effortless.
          </p>
          <p>
            We believe great tools should be free, fast, and respect your
            privacy. No accounts. No subscriptions. No tracking. Just paste a
            link and download.
          </p>

          {/* Stats */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Free Forever</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>0</span>
              <span className={styles.statLabel}>Sign-ups Required</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>HD</span>
              <span className={styles.statLabel}>Quality Downloads</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Always Available</span>
            </div>
          </div>

          <h3>What We Offer</h3>
          <ul>
            <li>
              <strong>Twitter/X Video Downloads:</strong> Download any publicly
              available video from Twitter or X in high quality — including MP4
              format at multiple resolutions.
            </li>
            <li>
              <strong>GIF Downloads:</strong> Save animated GIFs from Twitter
              as video files you can use anywhere.
            </li>
            <li>
              <strong>No Watermarks:</strong> Download clean, original videos
              without any added branding or watermarks.
            </li>
            <li>
              <strong>No Software Required:</strong> Our tool works entirely in
              your browser — no app downloads, no plugins, no installs.
            </li>
            <li>
              <strong>All Devices Supported:</strong> Works seamlessly on
              desktop, tablet, and mobile — Android and iOS included.
            </li>
          </ul>

          <h3>How It Works</h3>
          <p>Using Twitter Video Downloader takes just three simple steps:</p>
          <ul>
            <li>
              <strong>Step 1 — Copy the link:</strong> Open Twitter/X, find the
              tweet with the video, and copy the tweet URL from your browser or
              the share menu.
            </li>
            <li>
              <strong>Step 2 — Paste and click:</strong> Paste the URL into the
              input field on our homepage and click the Download button.
            </li>
            <li>
              <strong>Step 3 — Choose quality and save:</strong> Select your
              preferred resolution and save the video directly to your device.
            </li>
          </ul>

          <h3>Privacy & Your Data</h3>
          <p>
            We take privacy seriously. When you use our service, we do not store
            the URLs you submit, we do not require you to create an account, and
            we do not track your personal activity. For full details, read our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>

          <h3>Disclaimer</h3>
          <p>
            Twitter Video Downloader is an independent tool and is not
            affiliated with, endorsed by, or officially connected to Twitter,
            X Corp, or any of their subsidiaries. We use the name "Twitter" for
            descriptive purposes only. Please use our service responsibly and
            respect the intellectual property rights of content creators.
          </p>

          <div className={styles.policyNote}>
            <strong>Want to get in touch?</strong> Whether you have a question,
            found a bug, or just want to say hello — head over to our{" "}
            <Link href="/contact">Contact Us</Link> page. We'd love to hear from
            you.
          </div>
        </div>
      </section>

      {/* Footer Nav */}
      <nav className={styles.footerNav}>
        <Link href="/">Home</Link>
        <Link href="/about" className={styles.active}>
          About Us
        </Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
    </>
  );
}