import { useState, useEffect } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail";


function Home() {
  const [items, setItems] = useState(null);
  
/* Llamado a la api */
  useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
     .then(response => response.json())
     .then(data => setItems(data))
  }, [])

  return (
    <Layout>
     <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {
        items?.map((item) => {
          return  <Card key={item.id} data={item}/>
        })
      }
     </div>
     <ProductDetail/>
     
    </Layout>
  )
}

export { Home }