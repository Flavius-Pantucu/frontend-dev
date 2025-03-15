import Image from "next/image";

const Product = async ({ productId }: { productId: string }) => {
  const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product = await data.json();
  console.log(product);

  return (
    <div className="w-[512px] min-h-[768px] bg-white rounded-lg z-20 p-10">
      <div className="flex justify-start text-slate-400 text-sm">
        {product.category.toUpperCase()}
      </div>
      <div className="flex justify-start text-slate-800 font-semibold text-xl">
        {product.title}
      </div>
      <div className="flex justify-start">
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p className="ml-1 text-md font-bold text-slate-700">
            {product.rating.rate}
          </p>
          <a href="#" className="text-md font-medium text-slate-700 ml-1">
            ({product.rating.count} reviews)
          </a>
        </div>
      </div>

      <div className="w-full aspect-square relative">
        <Image
          src={product.image}
          alt={"Product image"}
          fill={true}
          className="object-contain p-4"
        />
      </div>
      <div className="flex justify-start mt-5 text-slate-400 text-sm">
        DESCRIPTION
      </div>
      <div className="flex justify-center text-slate-800 font-semibold text-lg">
        {product.description}
      </div>
      <div className="bg-slate-200/80 py-1 flex justify-center text-slate-700 font-semibold text-xl mt-5 rounded-lg">
        ${product.price}
      </div>
    </div>
  );
};

export default Product;
