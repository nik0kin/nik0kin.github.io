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
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p style={{ marginTop: '1.5em' }}>
          I am interested in {getJavascriptName()}, Matrix, & SelfHosting.
        </p>
        <p>I am semi-interested in TurnBased/asynchronous game development.</p>

        <br />
        <br />
        <br />

        <div>
          I also have a{' '}
          <a rel="me" href="https://atx.pub/@Nikokin">
            Mastodon
          </a>{' '}
          account
        </div>
      </main>
    </Layout>
  );
}

function getJavascriptName() {
  return getRandomArrayElement([
    'javascript',
    'Javascript',
    'JavaScript',
    'ECMAScript',
    'Typescript',
    'TypeScript',
  ]);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomArrayElement(array) {
  return array[getRandomInt(0, array.length - 1)];
}
