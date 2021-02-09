import Head from 'next/head';
import { ReactNode } from 'react';

import { Header } from '~/features/header';
import styles from './Layout.module.css';

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

export default function Layout({ title = 'isString', children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <Header key="header" />

      <div id="main">{children}</div>

      {/* <Footer key="footer" /> */}
    </div>
  );
}