import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const products = useLoaderData()
    const { _id, name, image, description, brand, category, price, rating } = products;
    console.log(products);

    const handleUpdateData = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const updatedProduct = { image, name, brand, category, price, rating, description };
        console.log(updatedProduct);

        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({ title: 'Success', text: 'Product Updated Successfully', icon: 'success' });
                }
            })
    }
    return (
        <div>
            <div className="p-2 bg-base-200 lg:px-32 py-6 ">
                <div className="bg-white rounded-md p-6">
                    <h3 className="text-3xl text-center pb-4 font-extrabold">Update Product</h3>
                    <form onSubmit={handleUpdateData}>
                        <div className="md:flex gap-5 ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Product image</span>
                                </label>
                                <label className="">
                                    <input type="text" defaultValue={image} placeholder="Product image" name="image" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <label className="">
                                    <input type="text" defaultValue={name} placeholder="Product Name" name="name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex gap-5 ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <label className="">
                                    <input type="text" defaultValue={brand} placeholder="Brand Name" name="brand" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Brand Category</span>
                                </label>
                                <label className="">
                                    <input type="text" defaultValue={category} placeholder="Brand Category" name="category" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex gap-5 ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Product Price</span>
                                </label>
                                <label className="">
                                    <input type="text" defaultValue={price} placeholder="Product Price" name="price" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <label className="">
                                    <input type="text" defaultValue={description} placeholder="Short Description" name="description" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Product Rating</span>
                            </label>
                            <label>
                                <input type="text" defaultValue={rating} placeholder="Product Rating" name="rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="my-6">
                            <button className="p-2 bg-red-400 rounded-lg text-white font-bold hover:bg-red-500 w-full">Submit button</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;