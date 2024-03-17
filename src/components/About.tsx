import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company } = config;
  const { logo, name: companyName } = company;
  return (
    <>
      <div
        id="about"
        className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-5"
      >
        <div className="flex flex-col items-center justify-center">
          <div>
            <img src={logo} alt={companyName} className="w-16 h-16" />
          </div>
          <p className="my-3 text-sm lg:text-md text-gray-500">
            We deliver all over Pakistan, Reach out to us now!
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-6 bg-gray-100">
        <p className=" text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
          &copy; {new Date().getFullYear()} Ayoub & Co. ALL Rights Reserved.{' '}
        </p>
      </div>
    </>
  );
};
export default About;
