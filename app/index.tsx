import type { AppProps } from 'next/app';
import { useEffect, VFC } from 'react';
import { wrapper } from './store';
import { Layout, Header, Footer } from '~/atoms/layout';
// import axios from '~/utils/api';

const App: VFC<AppProps> = ({ Component, pageProps, router }) => {
  const { pathname } = router;

  useEffect(() => {}, []);

  // const testApi = () => {
  //   const response = axios.get(`/`);

  //   response.then(() => {
  //     console.log('ok!');
  //   });
  // };

  if (pathname.startsWith('/signin')) {
    return <Component />;
  }

  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
};

export default wrapper.withRedux(App);
