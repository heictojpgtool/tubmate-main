export const metadata = {
  title: "Twitter Video Downloader – Download X/Twitter Videos HD",
  description:
    "Download Twitter and X videos online for free in HD quality. No login required. Paste tweet URL and save MP4 videos instantly on any device.",

  openGraph: {
    title: "Twitter Video Downloader – Free HD Download",
    description:
      "Paste any tweet URL and download the video in HD. Free, fast, no login needed.",
    url: "https://twittervideodownload.com.in",
    siteName: "Twitter Video Downloader",
    images: [
      {
        url: "https://twittervideodownload.com.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Twitter Video Downloader – Download Twitter Videos in HD",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Twitter Video Downloader – Download Twitter Videos",
    description:
      "Fast & free Twitter/X video downloader. Download videos and GIFs in HD with no watermark.",
    images: ["https://twittervideodownload.com.in/og-image.jpg"],
  },

  alternates: {
    canonical: "https://twittervideodownload.com.in/",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}