/* eslint-disable react/prop-types */

const Collections = ({ newCollection }) => {
    const { image } = newCollection;
    return (
        <div>
            <div className=" image-full">
                <figure><img className="mx-auto justify-center w-full lg:w-[250px] h-56 lg:h-44" src={image} alt="car" /></figure>
            </div>
        </div>
    );
};

export default Collections;