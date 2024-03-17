import React, { useRef, useEffect } from 'react';

import config from '../config/index.json';

const Companies = () => {
  const { features } = config;
  const { subtitle, description, companies } = features;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let totalWidth = 0;
    companies.forEach((company) => {
      const image = new Image();
      image.src = company.logo;
      totalWidth += image.width + 20;
    });

    if (containerRef.current) {
      containerRef.current.style.width = `${totalWidth * 2}px`;
    }
  }, [companies]);

  return (
    <div className={`py-12 bg-background`} id="features">
      <style>
        {`
          @keyframes scrollAnimation {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .company-container {
            display: flex;
            overflow-x: hidden;
            animation: scrollAnimation 15s linear infinite;
          }

          @media (max-width: 640px) {
            .company-container {
              animation-duration: 15s;
            }
          }

          .company {
            flex: 0 0 auto;
          }

          .company:last-child {
            margin-right: 0;
          }
        `}
      </style>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-8 lg:pb-20">
          <p className="mt-2 text-2xl lg:text-3xl leading-8 font-extrabold tracking-tight text-gray-900">
            {subtitle}
          </p>
          <p className="mt-4 px-6 text-sm lg:text-xl text-gray-500">
            {description}
          </p>
        </div>
        <div className="w-[300px] md:w-[700px] lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="company-container mt-16" ref={containerRef}>
            {companies.map((company, index) => (
              <div
                key={index}
                className="company flex flex-col items-center mx-8"
              >
                <img src={company.logo} alt={company.name} className="h-36" />
              </div>
            ))}
            {companies.map((company, index) => (
              <div
                key={index + companies.length}
                className="company flex flex-col items-center mx-8"
              >
                <img src={company.logo} alt={company.name} className="h-36" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
