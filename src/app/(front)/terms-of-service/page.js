import Link from "next/link";
import styles from "./terms-of-service.module.css";

export const metadata = {
  title: "Terms of Service – Twitter Video Downloader",
  description: "Read the terms and conditions for using Twitter Video Downloader.",
};

export default function TermsOfService() {
  return (
    <>
      <section className={styles.pageHero}>
        <h1>Terms of <span>Service</span></h1>
        <p>By using our service, you agree to these terms. Please read them carefully.</p>
      </section>
      <section className={styles.policyBody}>
        <div className={styles.policyInner}>
          <span className={styles.lastUpdated}>Last Updated: January 2025</span>
          <h2>Agreement to Terms</h2>
          <p>By accessing or using Twitter Video Downloader, you agree to be bound by these Terms of Service. If you do not agree, please do not use our service.</p>
          <h3>1. Use of the Service</h3>
          <p>Twitter Video Downloader is a free tool for downloading publicly available videos from Twitter/X for personal, non-commercial use only.</p>
          <h3>2. Acceptable Use</h3>
          <p>You may <strong>not</strong> use our service to download copyrighted content without permission, redistribute or sell downloaded videos, violate Twitter's Terms of Service, or automate bulk downloads.</p>
          <h3>3. Intellectual Property</h3>
          <p>All videos remain the intellectual property of their respective creators. We do not claim ownership of any content processed through our tool.</p>
          <h3>4. Disclaimer</h3>
          <p>Our service is provided "as is" without warranties of any kind. We are not affiliated with Twitter or X Corp.</p>
          <h3>5. Changes to Terms</h3>
          <p>We may update these terms at any time. Continued use of the service constitutes acceptance of the revised terms.</p>
          <div className={styles.policyNote}>
            <strong>Questions?</strong> Visit our <Link href="/contact">Contact Us</Link> page.
          </div>
        </div>
      </section>
      <nav className={styles.footerNav}>
        <Link href="/">Home</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service" className={styles.active}>Terms of Service</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
    </>
  );
}