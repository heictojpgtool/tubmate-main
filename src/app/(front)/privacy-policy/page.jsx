import Link from "next/link";
import styles from "./privacy-policy.module.css";

export const metadata = {
  title: "Privacy Policy – Twitter Video Downloader",
  description: "Learn how Twitter Video Downloader handles your data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <h1>
          Privacy <span>Policy</span>
        </h1>
        <p>
          We respect your privacy. Here's exactly how we handle your data — no
          legal jargon, just plain English.
        </p>
      </section>

      {/* Content */}
      <section className={styles.policyBody}>
        <div className={styles.policyInner}>
          <span className={styles.lastUpdated}>Last updated: June 1, 2025</span>

          <h2>Our Commitment to Your Privacy</h2>
          <p>
            Twitter Video Downloader ("we", "us", or "our") is committed to
            protecting your personal information. This Privacy Policy explains
            what data we collect, why we collect it, and how we use it when you
            use our service.
          </p>

          <h3>Information We Collect</h3>
          <p>We collect minimal information to provide our service effectively:</p>
          <ul>
            <li>
              <strong>URLs you submit:</strong> The Twitter/X video links you
              paste into our tool. These are processed in real time and are not
              stored permanently.
            </li>
            <li>
              <strong>Usage data:</strong> Anonymous analytics such as page
              views, browser type, device type, and country.
            </li>
            <li>
              <strong>Log data:</strong> Standard server logs including IP
              address, timestamp, and pages visited — retained for up to 30 days
              for security purposes.
            </li>
          </ul>

          <h3>How We Use Your Information</h3>
          <ul>
            <li>To process your video download requests in real time.</li>
            <li>To monitor and improve site performance and reliability.</li>
            <li>To detect and prevent abuse or malicious activity.</li>
            <li>To understand usage patterns and fix bugs.</li>
          </ul>

          <h3>Cookies &amp; Tracking</h3>
          <p>
            We use only essential cookies required for the site to function. We
            do <strong>not</strong> use advertising cookies, tracking pixels, or
            third-party retargeting. You can disable cookies in your browser
            settings without affecting core functionality.
          </p>

          <h3>Data Sharing</h3>
          <p>
            We do <strong>not</strong> sell, rent, or trade your personal data to
            any third party. We may share anonymized, aggregated usage statistics
            for analytics purposes only.
          </p>

          <h3>Data Retention</h3>
          <p>
            Submitted URLs are not stored after your download request is
            fulfilled. Server logs are purged after 30 days. Anonymous analytics
            data may be retained indefinitely in aggregated form.
          </p>

          <h3>Your Rights</h3>
          <p>
            Depending on your location, you may have rights to access, correct,
            or delete your personal data. To exercise any of these rights, please{" "}
            <Link href="/contact">contact us</Link>.
          </p>

          <h3>Children's Privacy</h3>
          <p>
            Our service is not directed at children under the age of 13. We do
            not knowingly collect personal information from children.
          </p>

          <h3>Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. When we do, we
            will update the "Last updated" date at the top of this page.
          </p>

          <div className={styles.policyNote}>
            <strong>Questions?</strong> If you have any questions about this
            Privacy Policy, please visit our{" "}
            <Link href="/contact">Contact Us</Link> page. We're happy to help.
          </div>
        </div>
      </section>

      {/* Footer Nav */}
      <nav className={styles.footerNav}>
        <Link href="/">Home</Link>
        <Link href="/privacy-policy" className={styles.active}>
          Privacy Policy
        </Link>
        <Link href="/terms-of-service">Terms of Service</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
    </>
  );
}