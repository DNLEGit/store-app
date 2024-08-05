import React, { useContext } from 'react';
import './styles.css';
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../OrderCard';

function CheckOutSideMenu() {
  const context = useContext(ShoppingCartContext);

  return (
    <aside className={`${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'} check-out-side-menu flex-col fixed right-0 top-0 w-80 h-screen border border-black rounded-lg bg-green-400 overflow-y-auto`}>
      <div className='flex justify-between items-center p-3 sticky top-0 bg-green-400 z-10'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div onClick={context.closeCheckOutSideMenu} className='cursor-pointer'>
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
  
      <div className='flex flex-col gap-2 p-3'>
        {
          context.cartProducts.map(product => (
            <OrderCard 
              key={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))
        }
      </div>
    </aside>
  );
}

export { CheckOutSideMenu };
