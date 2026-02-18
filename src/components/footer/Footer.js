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
      {/* TOP */}
      <div className="footer-top">
        {/* LOGO + TEXT */}
        <div className="footer-brand">
          <div className="logo">𝕏</div>
          <h3>Twitter Video Downloader</h3>
          <p>
            Free online tool to download Twitter videos and GIFs in HD quality.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#">How to Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>

        {/* PLATFORMS */}
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

      {/* DISCLAIMER */}
      <div className="footer-disclaimer">
        <strong>Disclaimer:</strong> This tool is not affiliated with Twitter or
        X Corp. All trademarks belong to their respective owners. This service
        is for personal use only. Please respect copyright and intellectual
        property rights.
      </div>

      {/* BOTTOM */}
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
