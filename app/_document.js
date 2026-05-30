import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon and manifest */}
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />

        {/* Primary Meta Tags */}
        <meta name="title" content="RocketSingh | Super Fast Service" />
        <meta name="description" content="RocketSingh is a super fast on demand home service." />
        <meta name="keywords" content="RocketSingh, Super Fast Service, On Demand Home Service, India" />
        <meta name="author" content="RocketSingh" />

        {/* Open Graph */}
        <meta property="og:url" content="https://rocketsingh-six.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RocketSingh | Super Fast Service" />
        <meta property="og:description" content="RocketSingh is a super fast on demand home service." />
        <meta property="og:image" content="https://rocketsingh-six.vercel.app/og/default.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rocketsingh-six.vercel.app" />
        <meta property="twitter:url" content="https://rocketsingh-six.vercel.app" />
        <meta name="twitter:title" content="RocketSingh | Super Fast Service" />
        <meta name="twitter:description" content="RocketSingh is a super fast on demand home service." />
        <meta name="twitter:image" content="https://rocketsingh-six.vercel.app/og/default.png" />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=YOUR-GTM-ID"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
