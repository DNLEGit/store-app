import React, { useContext } from 'react';
import './styles.css';
import { ShoppingCartContext } from '../../Context';

function ProductDetail() {
  const context = useContext(ShoppingCartContext);

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border hover:overflow-y-auto h-full border-black rounded-lg bg-green-400`}>
      <div className='flex justify-between items-center p-1'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div onClick={context.closeProductDetail} className='cursor-pointer'>
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
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
      <div className='flex flex-col p-6 h-fit'>
            <img 
                className='h-44 w-auto mx-auto mb-4' // Agrega un margen inferior para separar la imagen del texto
                src={context.productToShow.image} 
                alt=""
            />
            <div className='text-sm font-semibold'>{context.productToShow.title}</div>
            <div className='text-sm text-gray-500'>{context.productToShow.category}</div>
            <div className='mt-2 mb-15 text-xs '>{context.productToShow.description}</div>
      </div>

    </aside>
  );
}

export { ProductDetail };
