import '../styles/globals.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Head from 'next/head';
import Constants from '../constant';

function MyApp({ Component, pageProps }) {
  const link = Constants.favicon;
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href={link.url} type="image/x-icon" />
        <meta name="description" content="This is my portfolio." />
        <title>Jay - Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
