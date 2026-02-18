"use client";

import { useEffect, useState } from "react";
import "./footer.css";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(document.documentElement.scrollTop > 300);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">𝕏</div>
          <h3>Twitter Video Downloader</h3>
          <p>
            Free online tool to download Twitter videos and GIFs in HD quality.
          </p>
        </div>

<a href="/how-to-use">How to Use</a>
<a href="/privacy-policy">Privacy Policy</a>
<a href="/terms-of-service">Terms of Service</a>
<a href="/contact">Contact Us</a>


        <div className="footer-platforms">
          <h4>Supported Platforms</h4>
          <div className="platform-tags">
            <span>twitter.com</span>
            <span>x.com</span>
            <span>Mobile</span>
            <span>Desktop</span>
          </div>
        </div>
      </div>

      <div className="footer-disclaimer">
        <strong>Disclaimer:</strong> This tool is not affiliated with Twitter or
        X Corp. All trademarks belong to their respective owners. This service
        is for personal use only. Please respect copyright and intellectual
        property rights.
      </div>

      <div className="footer-bottom">
        <p>© 2026 Twitter Video Downloader. All rights reserved.</p>
        <p className="made">
          Made with <span>❤️</span> for easy video downloads
        </p>
      </div>

      {visible && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </footer>
  );
}
