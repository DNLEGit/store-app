import { createContext } from "react";
import React, { useState } from 'react';


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    /* estado para la cantidad de items del carrito */
    const [count, setCount] = useState(0)

    /* estado para la barra lateral que muestra los detalles de los productos */
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    const openProductDetail = () => setIsProductDetailOpen(true)

    const closeProductDetail = () => setIsProductDetailOpen(false)
    /* Estado para mostrar los detalles de un producto en especifico */

    const [productToShow, setProductToShow] = useState({})

    /* Estado para el menu de los productos en el carrito */
    const [isCheckOutMenuOpen, setIsCheckOutMenuOpen] = useState(false)
    const openCheckOutMenu = () => setIsCheckOutMenuOpen(true)
    const closeCheckOutMenu = () => setIsCheckOutMenuOpen(false)

    /* Estado para agregar productos al carrito */
    const [ cartProducts, setCartProducts ] = useState([])

    console.log(cartProducts)

    return (
        <ShoppingCartContext.Provider value ={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckOutMenuOpen,
            setIsCheckOutMenuOpen,
            openCheckOutMenu,
            closeCheckOutMenu

        }} >
            {children}
        </ShoppingCartContext.Provider>
    )
}