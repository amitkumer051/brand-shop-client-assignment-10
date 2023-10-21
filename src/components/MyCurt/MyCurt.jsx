import { useLoaderData } from "react-router-dom";
import CartProducts from "./CartProducts";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyCurt = () => {
    const {user} = useContext(AuthContext)
    const currentUser =user.email;
    console.log(currentUser);

    const loadCart= useLoaderData();
    const [carts,setCarts] = useState(loadCart)
    
    console.log(carts);

    const individualCart = carts.filter(newCart => newCart?.userMail == currentUser)

    return (
        <div className="my-4">
            <h2 className="text-4xl font-bold text-center p-4">My Cart</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    individualCart?.map(cart=> <CartProducts key={cart._id} cart={cart} carts={carts} setCarts={setCarts} ></CartProducts>)
                }
            </div>
        </div>
    );
};

export default MyCurt;