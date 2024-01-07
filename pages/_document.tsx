import Document, { Head, Html, Main, NextScript } from "next/document";

import StyledComponentsRegistry from "lib/registry";

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
