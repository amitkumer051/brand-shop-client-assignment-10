
import {  Link, useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const Products = useLoaderData();
    const { id } = useParams();
    const productsData = Products?.find(product => product._id == id);
    console.log(productsData);
    return (
        <div className="lg:w-[800px] mx-auto justify-center my-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="w-[500px] " src={productsData?.image} alt="Product" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {productsData?.name}</h2>
                    <h2>Brand: {productsData.brand}</h2>
                    <h2>Price: {productsData.price}</h2>
                    <h2>Rating: {productsData.rating}</h2>
                    <div className="card-actions  flex justify-end">
                        <button className="btn btn-accent btn-outline">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ViewDetails;
