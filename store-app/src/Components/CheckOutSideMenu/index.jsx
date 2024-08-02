import React, { useContext } from 'react';
import './styles.css';
import { ShoppingCartContext } from '../../Context';

function CheckOutSideMenu() {
  const context = useContext(ShoppingCartContext);

  return (
    <aside className={`${context.isCheckOutMenuOpen ? 'flex' : 'hidden'} check-out-side-menu flex-col fixed right-0 border hover:overflow-y-auto h-full border-black rounded-lg bg-green-400`}>
      <div className='flex justify-between items-center p-3'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div onClick={context.closeCheckOutMenu} className='cursor-pointer'>
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
     

    </aside>
  );
}

export { CheckOutSideMenu };
