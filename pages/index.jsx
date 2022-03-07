import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Cards from '../components/Cards';

const IndexPage = () => {
  return (
    <>
      <Head>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='./images/favicon-32x32.png'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>"Frontend Mentor | Time tracking dashboard"</title>
        <meta
          property='og:title'
          content='Frontend Mentor | Time tracking dashboard'
          key='title'
        />
      </Head>

      <main className='app'>
        <section className='app--profile'>
          <article className='app--profile--top'>
            <img src='/images/image-jeremy.png' alt='profile picture' />
            <p>Report for</p>
            <h2>Jeremy Robson</h2>
          </article>
          <article className='app--profile--bottom'>
            <Link href='/daily'>
              <a>Daily</a>
            </Link>
            <Link href='/weekly'>
              <a>Weekly</a>
            </Link>
            <Link href='/monthly'>
              <a>Monthly</a>
            </Link>
          </article>
        </section>
        <section className='app--cards'>
          <Cards />
        </section>
      </main>
      <div className='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by <a href='#'>Matteo</a>.
      </div>
    </>
  );
};

export default IndexPage;
