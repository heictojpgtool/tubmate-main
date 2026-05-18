import Link from "next/link";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Us – Twitter Video Downloader",
  description: "Get in touch with the Twitter Video Downloader team.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <h1>
          Contact <span>Us</span>
        </h1>
        <p>
          Have a question, suggestion, or issue? We'd love to hear from you.
          We typically respond within 24–48 hours.
        </p>
      </section>

      {/* Content */}
      <section className={styles.contactBody}>
        <div className={styles.contactInner}>

          {/* Info Cards */}
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>✉️</div>
              <h3>Email Us</h3>
              <p>For general inquiries, support, or feedback.</p>
              <a href="mailto:support@twittervideodownload.com.in">
                support@twittervideodownload.com.in
              </a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>⚡</div>
              <h3>Response Time</h3>
              <p>We aim to reply to all messages within 24–48 hours on business days.</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🔒</div>
              <h3>Privacy First</h3>
              <p>
                Your message is confidential. We never share your contact
                details with third parties.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formCard}>
            <h2>Send Us a Message</h2>
            <p className={styles.formSubtitle}>
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className={styles.form} action="mailto:support@twittervideodownload.com.in" method="post" encType="text/plain">
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject">
                  <option value="">Select a topic...</option>
                  <option value="support">Technical Support</option>
                  <option value="bug">Report a Bug</option>
                  <option value="dmca">DMCA / Copyright Issue</option>
                  <option value="feedback">General Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Describe your question or issue in detail..."
                  required
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message →
              </button>
            </form>
          </div>

          {/* DMCA Note */}
          <div className={styles.dmcaNote}>
            <strong>⚠️ DMCA / Copyright Notices:</strong> If you believe content
            processed through our service infringes your copyright, please contact
            us with full details of the content in question and proof of ownership.
            We take all copyright concerns seriously and will respond promptly.
          </div>
        </div>
      </section>

      {/* Footer Nav */}
      <nav className={styles.footerNav}>
        <Link href="/">Home</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
        <Link href="/contact" className={styles.active}>
          Contact Us
        </Link>
      </nav>
    </>
  );
}