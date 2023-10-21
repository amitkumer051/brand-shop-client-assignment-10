
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import NavBar from "../components/NavBar/NavBar";


const ViewDetails = () => {
    const { user } = useContext(AuthContext);
    const Products = useLoaderData();
    const { id } = useParams();
    const productsData = Products?.find(product => product._id == id);
    console.log(productsData);

    const handleClick = event => {
        event.preventDefault();
        const userMail = user.email;
        const image = productsData.image;
        const name = productsData.name;
        const brand = productsData.brand;
        const price = productsData.price;
        const rating = productsData.rating;

        const addToCart = { image, brand, price, rating, name, userMail }
        console.log(addToCart);

        fetch('https://brand-shop-server-assignment-10-h06m6z73j.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({ title: 'Success', text: 'Product Add to Cart Successfully', icon: 'success' });
                }
            })


    }
    return (
        <><NavBar></NavBar><div className="lg:w-[800px] mx-auto justify-center my-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="w-[500px] " src={productsData?.image} alt="Product" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {productsData?.name}</h2>
                    <h2>Brand: {productsData.brand}</h2>
                    <h2>Price: {productsData.price}</h2>
                    <h2>Rating: {productsData.rating}</h2>
                    <div className="card-actions  flex justify-end">
                        <button onClick={handleClick} className="btn btn-accent btn-outline">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div></>

    );
};

export default ViewDetails;
