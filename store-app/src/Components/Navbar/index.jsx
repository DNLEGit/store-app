import { NavLink } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";


const Navbar = () => {
    const context = useContext(ShoppingCartContext);

    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm bg-slate-600 text-white'>
            <ul className='flex items-center gap-4'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>Shopi</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        onClick={() => {
                            context.setSearchByCategory(null); // Limpiar búsqueda de categoría
                            context.setSearchByTitle(''); // Limpiar búsqueda de título
                        }}
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/men-clothing'
                        onClick={() => {
                            context.setSearchByCategory(`men's clothing`);
                            context.setSearchByTitle(''); // Limpiar búsqueda de título
                        }}
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Men's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        onClick={() => {
                            context.setSearchByCategory(`electronics`);
                            context.setSearchByTitle(''); // Limpiar búsqueda de título
                        }}
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/jewelery'
                        onClick={() => {
                            context.setSearchByCategory(`jewelery`);
                            context.setSearchByTitle(''); // Limpiar búsqueda de título
                        }}
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/women-clothing'
                        onClick={() => {
                            context.setSearchByCategory(`women's clothing`);
                            context.setSearchByTitle(''); // Limpiar búsqueda de título
                        }}
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Women's Clothing
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-4'>
                <li>correo@gmail.com</li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sing-in'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Sing In
                    </NavLink>
                </li>
                <li className='flex justify-between items-center'>
                    <MdAddShoppingCart /> {context.count}
                </li>
            </ul>
        </nav>  
    );
}

export { Navbar };
