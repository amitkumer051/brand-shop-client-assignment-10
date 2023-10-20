import { NavLink } from "react-router-dom";
import './navbar.css'
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const currentPath = window.location.pathname;

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="lg:flex space-y-4 text-center items-center lg:justify-between p-2  bg-gray-300">
                <div className="">
                    <div className="flex items-center mx-auto justify-center">
                    <img className="w-auto h-16 " src="https://i.ibb.co/rtvBzLR/final-logo.png" alt="Logo" />
                    <h2 className="text-3xl text-center font-semibold text-red-600">Autovance</h2>
                    </div>
                </div>
                <div className=" ">
                    <nav>
                        <ul className="flex  md:text-base text-xs  px-1 mx-auto justify-center">
                            <li className={currentPath === '/' ? 'active' : ''}><NavLink to='/'>Home</NavLink></li>
                            <li className={currentPath === '/addProduct' ? 'active' : ''}><NavLink to='/addProduct'>Add Product</NavLink></li>
                            <li className={currentPath === '/myCurt' ? 'active' : ''}><NavLink to='/myCurt'>My Cart</NavLink></li>

                            <li className={currentPath === '/collection' ? 'active' : ''}><NavLink to='/collection'>Collection</NavLink></li>

                            <li className={currentPath === '/blogs' ? 'active' : ''}><NavLink to='/blogs'>Blogs</NavLink></li>
                            <li className={currentPath === '/contactUs' ? 'active' : ''}><NavLink to='/contactUs'>Support</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center justify-center ">
                {user &&
                    <><h2 className="pr-2">{user.displayName}</h2><div className=" mr-2 avatar online">
                        <div className="w-8  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL} />
                        </div>
                    </div></>
                }
                {
                    user ?
                        <NavLink onClick={handleSignOut} className="rounded-2xl bg-emerald-500 px-3 py-1  text-white font-bold">Sign Out</NavLink>
                        :
                        <NavLink to='/login' className="bg-red-400 hover:bg-red-500 px-3 font-semibold py-1 text-white  rounded-2xl">Login</NavLink>
                }
                </div>
            </div>
        </div>
    );
};

export default NavBar;