import Document, { Html, Head, Main, NextScript } from "next/document";
import GenericMetaHeaders from "../components/meta-headers";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <GenericMetaHeaders />
        </Head>
        <body className="bg-ocf-black-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
