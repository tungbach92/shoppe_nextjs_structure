import React from "react";
import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    const homePage = process.env.NEXT_PUBLIC_HOME_PAGE
    const metaSettings = [
      {
        name: "description",
        content: "Next-js structure"
      }, {
        name: "keywords",
        itemProp: "keywords",
        content: "nextjs structure"
      }, {
        name: "news_keywords",
        content: "next-js structure"
      }, {
        property: "og:site_name",
        content: "next-js structure"
      }, {
        property: "og:type",
        content: "website"
      }
    ]
    return (
      <Html>
        <Head>
          {
            metaSettings.map((meta, index) => {
              return <meta key={index} {...meta}/>
            })
          }
          <script dangerouslySetInnerHTML={{
            __html: `[Your Scripts]`
          }}/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
