export const metadata = {
  title: "Twitter Video Downloader – Download Twitter & X Videos in HD",
  description:
    "Free Twitter video downloader to download Twitter/X videos and GIFs in HD quality. No watermark, no signup required. Fast & easy online tool.",

  openGraph: {
    title: "Twitter Video Downloader – Download Twitter Videos Online",
    description:
      "Download Twitter & X videos and GIFs online in HD quality. 100% free, no watermark, no registration required.",
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