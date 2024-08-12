import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>

      <div className='flex items-center justify-center relative w-80 ' >
        <h1 className='font-medium text-xl p-4'>Home</h1>
      </div>
      <div>
        <input
         type="text" 
         placeholder='Search a product' 
         className='rounded-lg w-80 mb-4 p-2 border border-black text-center placeholder:text-center'
         onChange={(event) => context.setSearchByTitle(event.target.value)}/>
      </div>


     <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {
        context.items?.map((item) => {
          return  <Card key={item.id} data={item}/>
        })
      }
     </div>
     <ProductDetail/>
     
    </Layout>
  )
}

export { Home }