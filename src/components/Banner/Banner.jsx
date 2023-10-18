
const Banner = () => {
    return (
        <div className="hero mb-10 lg:h-[450px] h-[800px]" style={{ backgroundImage: 'url(https://i.ibb.co/6gFnr9B/banner12.jpg)' }}>
            <div className="hero-overlay  bg-opacity-60"></div>
            <div className=" text-center text-white lg:flex items-center">
                <div className="lg:w-1/2 p-10">
                    <h1 className="mb-4 text-5xl font-bold">Automotive sop and service center</h1>
                    <p className="mb-5">Our Goal is provides excellent customer service, including clear communication about repairs, estimates, and completion timeset.</p>
                    <button className="btn ">Get Started service</button>
                </div>


                <div className="lg:w-1/2  ">
                    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/gz7VXdr/banner1.jpg" className="rounded-box w-64 h-60" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/6gFnr9B/banner12.jpg" className="rounded-box w-64 h-60" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/9cTfH7x/BMW.jpg" className="rounded-box w-64 h-60" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/FXLZzcg/Ford.jpg" className="rounded-box w-64 h-60 " />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/M1dqckJ/Tesla.jpg" className="rounded-box w-64 h-60 " />
                        </div>
                    </div>
                </div>

                {/* <div className="lg:w-1/2 lg:visible  ">
                   <img className="w-[350px] mx-auto justify-center rounded-xl" src="https://i.ibb.co/gz7VXdr/banner1.jpg" alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default Banner;