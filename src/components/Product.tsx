import config from '../config/index.json';

const Product = () => {
  const { product } = config;

  return (
    <section className={`bg-background py-8 max-w-7xl`} id="product">
      <div className="text-center pb-8">
        <p className="mt-2 text-2xl lg:text-3xl leading-8 font-extrabold tracking-tight text-gray-900">
          {product.title}
        </p>
        <p className="mt-4 px-6 lg:px-20 text-sm lg:text-xl text-gray-500">
          {product.description}
        </p>
      </div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 justify-center">
        {product.products.map((prod, index) => (
          <div key={index} className="company flex flex-col items-center mx-4">
            <div>
              <img src={prod.logo} alt={prod.name} className="h-52" />
              {/* <h1 className="text-sm lg:text-md text-gray-500 py-5 text-center">
                {prod.name}
              </h1> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
