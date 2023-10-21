/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const CartProducts = ({ cart, carts, setCarts }) => {
    const { _id, image, brand, name, price, rating } = cart;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to Delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://brand-shop-server-assignment-10-h06m6z73j.vercel.app/cart/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Cart Item has been deleted.',
                                'success'
                            )
                            const reamaining = carts.filter(cart => cart._id !== _id)
                            setCarts(reamaining)
                        }
                    })
            }
        })

    }
    return (
        <div className=" mx-auto justify-center card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img className="h-[200px] w-full" src={image} alt="Car" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <h2><span className="font-bold">Brand:</span> {brand}</h2>
                <h2><span className="font-bold">Price:</span> {price}</h2>
                <h2><span className="font-bold">Rating:</span> {rating}</h2>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn text-white bg-red-500 hover:bg-red-600">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartProducts;