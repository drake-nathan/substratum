import StyledComponentsRegistry from "lib/registry";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="/substratum/substratum.ico" rel="icon" />
        </Head>

        <body>
          <StyledComponentsRegistry>
            <Main />
            <NextScript />
          </StyledComponentsRegistry>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
