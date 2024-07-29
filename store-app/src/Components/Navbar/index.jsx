import { NavLink } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

const Navbar = () =>{

    const activeStyle = 'underline underline-offset-4 bg-green-300'

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
                    to='/clothes'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined }
                >
                    Clothes
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
                    to='/furniture'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined }
                >
                    Furniture
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/toys'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined }
                >
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/other'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined }
                >
                    Other
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
            <li>
                <MdAddShoppingCart />
            </li>
            
        </ul>
    </nav>  
)

}
export { Navbar }