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
    const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false)
    const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true)
    const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false)

    /* Estado para agregar productos al carrito */
    const [ order, setOrder ] = useState([])

    return (
        <ShoppingCartContext.Provider value ={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            isCheckOutSideMenuOpen,
            setIsCheckOutSideMenuOpen,
            openCheckOutSideMenu,
            closeCheckOutSideMenu,
            order,
            setOrder

        }} >
            {children}
        </ShoppingCartContext.Provider>
    )
}