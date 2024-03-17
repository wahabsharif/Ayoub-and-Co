import React from 'react';

import About from '../components/About';
import Companies from '../components/Companies';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import Location from '../components/Location';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Product from '../components/Product';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <div className="hidden lg:block">
          <MainHeroImage />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <LazyShow>
          <>
            <Product />
          </>
        </LazyShow>
      </div>
      <LazyShow>
        <>
          <Companies />
        </>
      </LazyShow>
      <div className="w-full flex justify-center">
        <LazyShow>
          <>
            <Location />
          </>
        </LazyShow>
      </div>
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
    </div>
  );
};

export default App;
