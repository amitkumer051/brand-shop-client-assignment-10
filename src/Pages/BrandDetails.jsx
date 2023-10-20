/* eslint-disable react/no-unknown-property */
import { useLoaderData, useParams } from "react-router-dom";
import Products from "./Products";

const BrandDetails = () => {
    const products = useLoaderData()
    const {id} = useParams();
    const product = products?.filter(product => product.name.toLowerCase() == id.toLowerCase());
    console.log(product);
    return (
        <div>
            
            <h2 className="text-center text-3xl font-bold p-5">Brand Items: {product.length}</h2>
            <div className="grid md:grid-cols-2  grid-cols-1 gap-6">
                {
                    product?.map(individualProduct=> <Products  key={individualProduct._id} individualProduct={individualProduct}></Products>)
                }
            </div>
        </div>
    );
};

export default BrandDetails;