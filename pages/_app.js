import '../styles/globals.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="description" content="This is my portfolio." />
        <title>Jay - Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
