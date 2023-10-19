/* eslint-disable react/prop-types */

const AllBrand = ({brand}) => {
    const {image,name}=brand;
    console.log(brand);
    return (
        <div className="card w-[360px] mx-auto justify-center  bg-base-100 shadow-xl image-full">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default AllBrand;