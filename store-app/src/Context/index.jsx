import { createContext, useEffect, useState } from "react";


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [items, setItems] = useState(null);
  
    /* Llamado a la api */
      useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
         .then(response => response.json())
         .then(data => setItems(data))
      }, []);

    /* estado para la cantidad de items del carrito */
    const [count, setCount] = useState(0);

    /* estado para la barra lateral que muestra los detalles de los productos */
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

    const openProductDetail = () => setIsProductDetailOpen(true);

    const closeProductDetail = () => setIsProductDetailOpen(false);
    /* Estado para mostrar los detalles de un producto en especifico */

    const [productToShow, setProductToShow] = useState({});

    /* Estado para el menu de los productos en el carrito */
    const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);
    const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true);
    const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false);

    /* Estado para cargar los items al carrito */
    const [cartProducts , setCartProducts] = useState([]);

    /* Estado para agregar productos al carrito */
    const [ order, setOrder ] = useState([]);

    /* Estado para buscar por nombre de items */
    const [searchByTitle, setSearchByTitle] = useState('');

    /* Estado para filtrar entre los items que existen en la api */
    const [filteredItems, setFilteredItems] = useState([]);

      
    /* Funcion que se encarga de filtrar entre los titulos de los items  */
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase())); 
    }
    

    /* Estado para filtrar por categoria */
    const [searchByCategory , setSearchByCategory] = useState(null)

    /* Funcion que se encarga de filtrar entre las categorias */
    const filteredItemsByCategory = (items, searchByCategory) => {
      return items?.filter(item => item.category.toLowerCase() === searchByCategory.toLowerCase());
    };

    useEffect(() => {
      if (items) {
          let filtered = items;
  
          // Filtrar por título si hay un término de búsqueda
          if (searchByTitle) {
              filtered = filteredItemsByTitle(filtered, searchByTitle);
          }
  
          // Filtrar por categoría si hay una categoría seleccionada
          if (searchByCategory) {
              filtered = filteredItemsByCategory(filtered, searchByCategory);
          }
  
          setFilteredItems(filtered);
      } else {
          setFilteredItems([]); // Opcional, para limpiar los filtros si no hay items
      }
  }, [items, searchByTitle, searchByCategory]);
  

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
            setOrder,
            cartProducts,
            setCartProducts,
            items, 
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory
        }} >
            {children}
        </ShoppingCartContext.Provider>
    )
}