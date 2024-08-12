
import { useRoutes , BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SingIn } from '../SingIn'
import { Navbar } from '../../Components/Navbar'
import '../../App.css'
import { CheckOutSideMenu } from '../../Components/CheckOutSideMenu'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '*', element: <NotFound /> },
    { path: '/sing-in', element: <SingIn /> },
  ]);
  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        <CheckOutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export { App }
