/* eslint-disable react/prop-types */

const CartProducts = ({ cart }) => {
    const { image, brand,name, price, rating } = cart;
    return (
        <div className=" mx-auto justify-center card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <h2><span className="font-bold">Brand:</span> {brand}</h2>
                <h2><span className="font-bold">Price:</span> {price}</h2>
                <h2><span className="font-bold">Rating:</span> {rating}</h2>
                <div className="card-actions justify-end">
                    <button className="btn text-white bg-red-500 hover:bg-red-600">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartProducts;