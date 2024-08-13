import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    // Si hay un término de búsqueda de título
    if (context.searchByTitle.length > 0) {
      if (context.filteredItems.length > 0) {
        return context.filteredItems.map((item) => (
          <Card key={item.id} data={item} />
        ));
      } else {
        return <div>No matching products found</div>;
      }
    } 
    
    // Si hay una categoría seleccionada
    if (context.searchByCategory) {
      if (context.filteredItems.length > 0 ) {
        return context.filteredItems.map((item) => (
          <Card key={item.id} data={item} />
        ));
      } else {
        return <div>No matching products found for the selected category</div>;
      }
    }
        // Si no hay filtro, mostrar todos los elementos
    return context.items?.map((item) => (
      <Card key={item.id} data={item} />
    ));
  }
  const title = context.searchByCategory ? context.searchByCategory : "Home";

  return (
    <Layout >
      <div className='flex items-center justify-center relative w-80'>
        <h1 className='font-medium text-xl p-4'>{title}</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder='Search a product'
          className='text-white rounded-lg w-80 mb-4 p-2 border border-black text-center placeholder:text-center bg-[#6d8b93]'
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
      </div>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export { Home };
