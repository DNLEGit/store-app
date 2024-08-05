import { useContext } from 'react'; // Importa el hook useContext de React
import { ShoppingCartContext } from '../../Context'; // Importa el contexto del carrito de compras

// Componente funcional Card que recibe datos del producto como props
function Card({ data }) {
  const context = useContext(ShoppingCartContext); // Accede al contexto del carrito

  // Muestra el detalle del producto al hacer clic en la tarjeta
  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail); // Establece el producto a mostrar
  };

  // Función para agregar los productos al carrito
  const addProductsToCart = (productData) => {
    context.setCartProducts([...context.cartProducts, productData]);// Agrega los productos al final del arreglo del carrito
    
  };

  // Maneja el clic en el botón de añadir al carrito
  const handleAddToCartClick = (event) => {
    event.stopPropagation(); // Evita que el clic se propague al contenedor de la tarjeta
    context.setCount(context.count + 1); // Incrementa el contador de productos en el carrito
    addProductsToCart(data); // Llama a la función para agregar el producto al carrito
    context.openCheckOutSideMenu(); //Abre el checkout side menu
    console.log('isCheckOutSideMenuOpen:', context.isCheckOutSideMenuOpen);
  };

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg border-2 grid-rows-4' 
      onClick={() => showProduct(data)} 
    >
      <figure className='relative mb-2 w-full h-4/5'> 
        <span className='absolute bottom-0 left-0 bg-white/40 rounded-lg text-xs m-2'>
          {data.category} 
        </span>
        <img
          src={data.image} 
          alt={data.title} 
          className='w-full h-full object-contain rounded-lg' 
        />
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2' 
          onClick={handleAddToCartClick} 
        >
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
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
            />
          </svg>
        </div>
      </figure>
      <p className='flex justify-between'> 
        <span className='text-sm font-light m-2 truncate mr-2'>{data.title}</span> 
        <span className='text-sm font-light m-2'>${data.price}</span> 
      </p>
    </div>
  );
}

export { Card }; 
