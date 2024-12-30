import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* يمكنك إضافة ميتا تاغ، روابط CSS خارجية، أو سكربتات هنا */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
