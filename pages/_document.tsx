import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Mads Opheim",
    description: "Doing my best for a better world. Through better tech and better policies.",
    image: "images/author.jpg",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
