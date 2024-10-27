// src/pages/index.tsx
import React from 'react';
import Head from 'next/head';
import HomeSection from '@/components/HomeSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Skleppy | Directory of US Factory and Brand Online Stores</title>
      </Head>
      <HomeSection />
    </>
  );
};

export default HomePage;
