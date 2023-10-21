import { useEffect, useState } from "react";
import AllBrand from "./AllBrand";


const Brand = () => {
    const [brands,setBrands] =useState()
    
    useEffect(()=>{
        fetch('https://brand-shop-server-assignment-10-h06m6z73j.vercel.app/brand')
        .then(res => res.json())
        .then(data => setBrands(data))
        
    },[])
    
    return (
        <div className="mb-16 ">
            <h2 className="text-5xl  font-bold text-center mb-6">Brands</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
            {
                brands?.map(brand => <AllBrand key={brand.id} brand={brand}></AllBrand>)
            }
            </div>
        </div>
    );
};

export default Brand;