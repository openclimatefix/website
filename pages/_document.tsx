import Document, { Html, Head, Main, NextScript } from "next/document";
import GenericMetaHeaders from "../components/meta-headers";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
