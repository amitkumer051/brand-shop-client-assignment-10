/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AllBrand = ({ brand }) => {
    const {  image, name } = brand || '';
    console.log(brand);

    const HandleBrand = (name)=>{
        console.log(name);
    }
    return (
        <Link to={`/brandDetails/${name}`} onClick={()=>HandleBrand(name)}>
            <div className="card md:w-[340px] w-[320px] h-64 mx-auto justify-center  bg-base-100 hover:shadow-2xl image-full">
                <figure><img  src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold">{name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default AllBrand;