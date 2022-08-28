import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Tech Shop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
