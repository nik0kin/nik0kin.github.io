import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/matrix">
            Matrix Stuff
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Dev site for Nik0kin">
      <HomepageHeader />
      <main>
        <p style={{ textAlign: 'center' }}>
          I am interested in Javascript, Matrix, & SelfHosting.
        </p>
        <br />
        <br />
        <p style={{ textAlign: 'center' }}>
          I am semi-interested in TurnBased/asynchronous game development.
        </p>
      </main>
    </Layout>
  );
}
