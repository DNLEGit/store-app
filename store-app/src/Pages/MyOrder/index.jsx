import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { Link } from "react-router-dom"
function MyOrder() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        
        <Link to='/my-orders' className="absolute left-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
            </svg>
        </Link>
        
        <h1>My Order</h1>
      </div>

      <div className='px-3 overflow-auto max-h-min scrollbar-thumb-gray-900 flex-1'>
        {
          context.order?.slice(-1)[0].products.map(product => (
            <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  );
}

export { MyOrder };
