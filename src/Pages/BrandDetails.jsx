/* eslint-disable react/no-unknown-property */
import { useLoaderData } from "react-router-dom";
import Products from "./Products";

const BrandDetails = () => {
    const products = useLoaderData()
    return (
        <div>
            <h2>Brand details {products.length}</h2>
            <div className="grid md:grid-cols-2  grid-cols-1 gap-6">
                {
                    products?.map(product=> <Products  key={product._id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default BrandDetails;