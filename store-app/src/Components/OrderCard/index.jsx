import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';


const OrderCard = (props) => {
    const { id, title, imageUrl, price, handleDelete } = props
    const context = useContext(ShoppingCartContext)

    let renderXMarkIcon

    if(handleDelete){

        renderXMarkIcon =  <div onClick={() => handleDelete(id)} className='cursor-pointer'>
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

    }

    return (
        <div className='flex justify-between items-center p-2'>

            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover'
                    src={props.imageUrl} alt={props.title} />
                </figure>
                <p className='text-sm font-light'>{props.title}</p>
            </div>

            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{props.price}</p>
                {renderXMarkIcon}
            </div>

        </div>
    ) 
}

export { OrderCard }