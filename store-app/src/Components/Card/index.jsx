import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function Card({ data }) {
  const context = useContext(ShoppingCartContext);

  const handleCardClick = () => {
    context.openProductDetail();
  };

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail)
  }

  const handleAddToCartClick = (event) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
  };



  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg border-2 grid-rows-4'
      onClick={()=>showProduct(data)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/40 rounded-lg text-xs m-2'>
          {data.category}
        </span>
        <img
          src={data.image}
          alt={data.title}
          className='w-full h-full object-contain rounded-lg'
        />
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'
          onClick={handleAddToCartClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light m-2 truncate mr-2'>{data.title}</span>
        <span className='text-sm font-light m-2'>${data.price}</span>
      </p>
    </div>
  );
}

export { Card };
