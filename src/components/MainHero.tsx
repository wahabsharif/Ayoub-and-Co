import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;

  function dialNumber(phoneNumber: string) {
    window.location.href = `tel:${phoneNumber}`;
  }

  return (
    <main className="2xl:relative mt-10 mx-auto 2xl:max-w-[1500px] max-w-7xl 2xl:w-full px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
          <span className="block xl:inline">{mainHero.title}</span> <br />
          <span className={`block text-[#F68E37] xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          {/* contact button */}
          <div
            className="rounded-md shadow"
            onClick={() => dialNumber('+923430555882')}
          >
            <a
              href={mainHero.primaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-[#F68E37] hover:shadow md:py-3 md:text-lg md:px-8 focus:border-none`}
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href={'https://maps.app.goo.gl/Mp6EbLZvTAcKgLRb9'}
              target="_blank"
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:text-primary md:py-3 md:text-lg md:px-8 focus:border-none`}
              rel="noreferrer"
            >
              Locate Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
