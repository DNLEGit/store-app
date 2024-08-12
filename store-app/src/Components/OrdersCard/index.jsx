import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';


const OrdersCard = (props) => {
    const { totalPrice, totalProducts } = props
    const context = useContext(ShoppingCartContext)

    return (
        <div className='flex justify-between items-center p-2 border border-black'>

            <p>
                <span>date</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>

        </div>
    ) 
}

export { OrdersCard }