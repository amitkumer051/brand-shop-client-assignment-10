

const Products = ({ product }) => {
    const { name, image, brand,category,price,rating} = product;
    console.log(product);
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto justify-center">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title">Brand: {brand}</h2>
                    </div>
                    <div className="flex justify-between">
                    <h2>Category: {category}</h2>
                    <h2>Price: {price}</h2>
                    </div>
                    <p className="text-center">Rating: {rating}</p>
                    <div className="card-actions justify-between">
                        <button className="btn btn-primary">Details button</button>
                        <button className="btn btn-primary">Update button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;