import React, { useContext } from 'react';
import './styles.css';
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../utils';


function CheckOutSideMenu() {
  const context = useContext(ShoppingCartContext);
  const handleDelete = (id) => {
    const filteredProducts = context.order.filter(product => product.id !== id);
    context.setOrder(filteredProducts);
}
  const handleCheckout = () =>{
    const orderToAdd = {
      
    }
  }


  return (
    <aside className={`${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'} check-out-side-menu flex-col fixed right-0 top-0 w-80 mb-2 border-black rounded-lg bg-green-400 overflow-y-auto`}>
      <div className='flex justify-between items-center p-3 top-0 bg-green-400 '>
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
  
      <div className='px-3 overflow-auto max-h-min scrollbar-thumb-gray-900 '>
        {
          context.order.map(product => (
            <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className='flex justify-between px-6'>
        <p>
        <span>Total: </span>
        <span>${totalPrice(context.order)}</span>
        </p>
        <button onClick= {() => handleCheckout()}>Checkout</button>
      </div>
    </aside>
  );
}

export { CheckOutSideMenu };
