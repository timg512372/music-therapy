import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import '../styles.scss';

//Custom index.HTML document to add the custom stylesheet --> DO NOT RENAME
export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <link rel="manifest" href="/static/manifest.json" />

                    <link rel="shortcut icon" type="image/png" href="/static/favicon.png" />

                    <link
                        href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700"
                        rel="stylesheet"
                    />
                    <link href="https://fonts.googleapis.com/css?family=Sumana" rel="stylesheet" />
                    <link
                        rel="stylesheet"
                        href="https://indestructibletype.com/fonts/Jost.css"
                        type="text/css"
                        charSet="utf-8"
                    />
                    <script src="//widget.cloudinary.com/global/all.js" type="text/javascript" />
                </Head>
                <style jsx global>{`
                    body {
                    }
                `}</style>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
