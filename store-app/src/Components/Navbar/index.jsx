import { NavLink } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";


const Navbar = () =>{
    const context = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4'

return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm bg-green-600'>
        <ul className='flex items-center gap-4'>
            <li className='font-semibold text-lg'>
                <NavLink to='/'>
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined }
                    >
                    All
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/men-clothing'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined }
                >
                    Men's Clothing
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/electronics'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined }
                >
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/jewelery'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined }
                >
                    Jewelery
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/women-clothing'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined }
                >
                    Women's Clothing
                </NavLink>
            </li>
            
        </ul>
        <ul className='flex items-center gap-4'>
            <li>
                correo@gmail.com
            </li>
            <li>
                <NavLink 
                    to='/my-orders'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined }
                >
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/my-account'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined }
                >
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/sing-in'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined }
                >
                    Sing In
                </NavLink>
            </li>
            <li className='flex justify-between items-center'>
                <MdAddShoppingCart /> {context.count}
               
            </li>
            
        </ul>
    </nav>  
)

}
export { Navbar }