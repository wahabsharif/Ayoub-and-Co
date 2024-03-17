import React from 'react';

const Location = () => {
  return (
    <section
      className={`bg-background py-8 2xl:max-w-[1500px] max-w-7xl flex flex-col items-center justify-center md:px-10 lg:px-0`}
      id="pricing"
    >
      {/* section top */}
      <div className="text-center pb-8 lg:pb-20">
        <p className="mt-2 text-2xl lg:text-3xl leading-8 font-extrabold tracking-tight text-gray-900">
          How to Find Us:
        </p>
        <p className="mt-4 px-6 lg:px-20 text-sm lg:text-xl text-gray-500">
          Our dedicated team is committed to providing excellent service and
          assistance to all our customers. Whether you&apos;re looking for
          everyday essentials or unique finds, we&apos;re here to help you
          discover the perfect items to suit your needs.
        </p>
      </div>
      <div className="w-full flex flex-col gap-6 lg:flex-row  lg:pl-10 xl:px-20 2xl:pl-20 2xl:justify-items-center">
        {/* map */}
        <div className="mx-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.8663632331113!2d72.8501047!3d33.6087717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df97903e7be53b%3A0xc046363266540e56!2sAyoub%20%26%20Co%20Auto%20Corporation!5e0!3m2!1sen!2s!4v1710517882980!5m2!1sen!2s"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] lg:w-[500px] lg:h-[400px] xl:w-[600px] xl:h-[500px] 2xl:w-[700px] 2xl:h-[600px]"
          ></iframe>
        </div>

        {/* location information */}
        <div className="rounded-md flex flex-col flex-1 mx-6 lg:mx-0 text-center lg:text-left">
          <div className="grid space-y-5 lg:space-y-3">
            <p className="text-md text-gray-900 xl:pr-10">
              At our store, you&apos;ll find a knowledgeable team ready to
              assist you in finding the right parts for your machinery needs.{' '}
              <br className="hidden 2xl:block" /> Whether it&apos;s a small
              component or a specialized part, we&apos;re committed to providing
              exceptional service and expertise.
            </p>
            <h2 className="text-lg font-bold">Operation Hours:</h2>
            <div className="text-sm text-gray-500 font-medium gap-2">
              <p>
                <strong>Monday - Sunday:</strong> 9:00 AM - 5:00 PM
              </p>
              <p>
                <strong>Friday:</strong> Closed
              </p>
            </div>
            <h2 className="text-lg font-bold">Contact Information:</h2>
            <div className="text-sm text-gray-500 font-medium gap-2">
              <p>
                <strong>Younis khan:</strong> +92 3430555882
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center lg:items-start gap-3">
            <p className="mt-4 text-md text-gray-900">
              We are located on Main GT Road.
            </p>
            <a
              href={'https://maps.app.goo.gl/Mp6EbLZvTAcKgLRb9'}
              target="_blank"
              className={`flex items-center justify-center px-3 py-2 border border-transparent w-[160px] text-base font-medium rounded-md text-background bg-[#F68E37] hover:shadow md:text-md focus:border-none`}
              rel="noreferrer"
            >
              Get Directions!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
