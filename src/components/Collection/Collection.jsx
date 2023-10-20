import { useEffect, useState } from "react";
import Collections from "./Collections";

const Collection = () => {

    const [collection,setCollection] =useState()

    useEffect(()=>{
        fetch('http://localhost:5000/collection')
        .then(res => res.json())
        .then(data => setCollection(data))
        
    },[])
    return (
        <div>
            <h3 className="text-4xl font-bold text-center p-8">Our Collections</h3> 
            <div className="grid gap-5 mx-auto justify-center lg:grid-cols-4 mb-6 md:grid-cols-2">
            {
                collection?.map(newCollection => <Collections key={newCollection.id} newCollection={newCollection}></Collections>)
            }
            </div>
        </div>
    );
};

export default Collection;