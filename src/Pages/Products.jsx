/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Products = ({ individualProduct }) => {
    const { _id, name, image, brand, category, price, rating } = individualProduct;
    console.log(individualProduct);
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto justify-center">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="card-title"><span className="font-bold">Name:</span> {name}</h2>
                        <h2 className="card-title"><span className="font-bold">Brand:</span> {brand}</h2>
                    </div>
                    <div className="flex justify-between">
                        <h2><span className="font-bold">Category:</span> {category}</h2>
                        <h2><span className="font-bold">Price:</span> {price}</h2>
                    </div>
                    <p className="text-center"><span className="font-bold">Rating:</span> {rating}</p>
                    <div className="card-actions justify-between">
                        <Link to={`/viewDetails/${_id}`}>
                            <button className="bg-red-500 px-3 rounded-lg text-white font-bold py-2">View Details</button>
                        </Link>
                        <Link to={`/update/${_id}`}>
                            <button className="bg-green-500 px-3 rounded-lg text-white font-bold py-2">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;