import React from 'react';
import Head from 'next/head';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Cards from '../components/Cards';

const IndexPage = () => {
  return (
    <div>
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
        <BrowserRouter>
          <section className='app--profile'>
            <article className='app--profile--top'>
              <img src='/images/image-jeremy.png' alt='profile picture' />
              <p>Report for</p>
              <h2>Jeremy Robson</h2>
            </article>
            <article className='app--profile--bottom'>
              <Link to='/daily'>Daily</Link>
              <Link to='/weekly'>Weekly</Link>
              <Link to='/monthly'>Monthly</Link>
            </article>
          </section>
          <section className='app--cards'>
            <Routes>
              <Route path='/' element={<Cards />} />
              <Route path='/:id' element={<Cards />} />
            </Routes>
          </section>
        </BrowserRouter>
      </main>
      <div className='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by <a href='#'>Matteo</a>.
      </div>
    </div>
  );
};

export default IndexPage;
