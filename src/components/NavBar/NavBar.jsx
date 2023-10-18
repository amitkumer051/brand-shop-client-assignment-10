import { Link, NavLink } from "react-router-dom";
import './navbar.css'

const NavBar = () => {

    const currentPath = window.location.pathname;

    return (
        <div>
            <div className="navbar bg-red-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li className={currentPath === '/' ? 'active' : ''}><NavLink to='/'>Home</NavLink></li>
                                <li className={currentPath === '/addProduct' ? 'active' : ''}><NavLink to='/addProduct'>Add Product</NavLink></li>
                                <li className={currentPath === '/myCurt' ? 'active' : ''}><NavLink to='/myCurt'>My Curt</NavLink></li>
                                <li className={currentPath === '/blogs' ? 'active' : ''}><NavLink to='/blogs'>Blogs</NavLink></li>
                                <li className={currentPath === '/contactUs' ? 'active' : ''}><NavLink to='/contactUs'>Contact Us</NavLink></li>
                            </ul>
                    </div>
                    <div className="flex items-center">
                    <img className="w-auto h-14" src="https://i.ibb.co/rtvBzLR/final-logo.png" alt="Logo" />
                    <h2 className="text-2xl font-semibold text-red-600">Autovance</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <nav>
                        <ul className=" menu-horizontal px-1 underline-offset-2">
                            <li className={currentPath === '/' ? 'active' : ''}><NavLink to='/'>Home</NavLink></li>
                            <li className={currentPath === '/addProduct' ? 'active' : ''}><NavLink to='/addProduct'>Add Product</NavLink></li>
                            <li className={currentPath === '/myCurt' ? 'active' : ''}><NavLink to='/myCurt'>My Curt</NavLink></li>
                            <li className={currentPath === '/blogs' ? 'active' : ''}><NavLink to='/blogs'>Blogs</NavLink></li>
                            <li className={currentPath === '/contactUs' ? 'active' : ''}><NavLink to='/contactUs'>Contact Us</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="navbar-end">
                    <Link to='/login'>
                    <button className="bg-orange-400 px-3 font-semibold py-1 text-white rounded-2xl">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;