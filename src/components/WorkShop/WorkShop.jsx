
const WorkShop = () => {
    return (
        <div className="hero lg:h-[250px] my-20 " style={{ backgroundImage: 'url(https://i.ibb.co/SdvLSgK/workshop.jpg)' }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4  w-full text-white text-center ">
                <div className="bg-red-400 p-5 h-[150px] mx-auto justify-center bg-opacity-70 w-[150px] rounded-full">
                    <h2 className="text-5xl font-bold">20</h2>
                    <h2> Worldwide Offices</h2>
                </div>
                <div className="bg-red-400 p-8 h-[150px] mx-auto justify-center bg-opacity-70 w-[150px] rounded-full">
                    <h2 className="text-5xl font-bold">30</h2>
                    <h2>Staffs</h2>
                </div>
                <div className="bg-red-400 p-5 h-[150px] mx-auto justify-center bg-opacity-70 w-[150px] rounded-full">
                    <h2 className="text-5xl font-bold">5</h2>
                    <h2>Countries Covered</h2>
                </div>
                <div className="bg-red-400 p-5 h-[150px] mx-auto justify-center bg-opacity-70 w-[150px] rounded-full">
                    <h2 className="text-5xl font-bold">36</h2>
                    <h2>Years of Experiences</h2>
                </div>
            </div>
        </div>
    );
};

export default WorkShop;