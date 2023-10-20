import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddData = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const addProduct = { image, name, brand, category, description, price, rating };
        console.log(addProduct);

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({ title: 'Success', text: 'Product Added Successfully', icon: 'success' });
                }
                form.reset();
            })
    }
    return (
        <div>
            <div className="p-2 bg-base-200 lg:px-32 py-6 ">
                <div className="bg-white rounded-md p-6">
                    <h3 className="text-3xl text-center pb-4 font-extrabold">Add Product</h3>
                    <form onSubmit={handleAddData}>
                        <div className="md:flex gap-5 ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Product image</span>
                                </label>
                                <label className="">
                                    <input type="text" placeholder="Product image" name="image" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <label className="">
                                    <input type="text" placeholder="Product Name" name="name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex gap-5 ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <label className="">
                                    <input type="text" placeholder="Brand Name" name="brand" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Brand Category</span>
                                </label>
                                <label className="">
                                    <input type="text" placeholder="Brand Category" name="category" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex gap-5 ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Product Price</span>
                                </label>
                                <label className="">
                                    <input type="text" placeholder="Product Price" name="price" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <label className="">
                                    <input type="text" placeholder="Short Description" name="description" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Product Rating</span>
                            </label>
                            <label>
                                <input type="text" placeholder="Product Rating" name="rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="my-6">
                            <button className="p-2 bg-red-400 rounded-lg text-white font-bold hover:bg-red-500 w-full">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;