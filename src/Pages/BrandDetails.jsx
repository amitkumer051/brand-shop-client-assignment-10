/* eslint-disable react/no-unknown-property */
import { Link, useLoaderData, useParams } from "react-router-dom";
import Products from "./Products";

const BrandDetails = () => {
    const products = useLoaderData()
    const { id } = useParams();
    const product = products?.filter(product => product?.name?.toLowerCase() == id.toLowerCase());
    console.log(product[0].image);
    return (
        <div>
            <div className="carousel lg:h-[400px]">
                <div id="item1" className="carousel-item w-full">
                    <img src={product[0]?.image} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={product[1]?.image} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={product[2]?.image} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={product[3]?.image} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
            <div className="p-4 mx-auto  text-center flex items-center  justify-between">
            <h2 className="text-center text-3xl font-bold p-5">Brand Items: {product.length}</h2>
            <Link to='/'><button className="btn ">Back to Home</button></Link>
            </div>
            
            <div className="grid md:grid-cols-2  grid-cols-1 gap-6">
                {
                    product?.map(individualProduct => <Products key={individualProduct._id} individualProduct={individualProduct}></Products>)
                }
            </div>
          
        </div>
    );
};

export default BrandDetails;
