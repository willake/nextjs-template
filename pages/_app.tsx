import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
