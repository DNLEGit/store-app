import { createContext } from "react";
import React, { useState } from 'react';


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    /* estado para la cantidad de items del carrito */
    const [count, setCount] = useState(0)

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    const openProductDetail = () => setIsProductDetailOpen(true)

    const closeProductDetail = () => setIsProductDetailOpen(false)

    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContext.Provider value ={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
        }} >
            {children}
        </ShoppingCartContext.Provider>
    )
}