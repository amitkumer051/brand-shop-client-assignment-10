import { FaHandshake, FaTools } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';
const Advantage = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-6'>Our Advantages</h2>
            <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            <div className='md:w-96 w-full bg-gray-100 hover:bg-gray-200 border-b-4' >
                <div className='mx-auto justify-center'>
                    <FaHandshake className=' mt-4 text-7xl  mx-auto justify-center'></FaHandshake>
                </div>
                <div className=" mb-6 text-center">
                    <h2 className="text-2xl mb-2 font-bold">Largest Dealership</h2>
                    <p>How to park your car at your garage?</p>
                </div>
            </div>
            <div className='md:w-96 w-full bg-gray-200 hover:bg-gray-300'>
                <div className='mx-auto justify-center'>
                    <AiFillCar className=' mt-4 text-7xl  mx-auto justify-center'></AiFillCar>
                </div>
                <div className=" mb-6 text-center">
                    <h2 className="text-2xl mb-2 font-bold">Lower Car Prices</h2>
                    <p>How to park your car at your garage?</p>
                </div>
            </div>
            <div className='md:w-96 w-full bg-gray-100 hover:bg-gray-200 border-b-4'>
                <div className='mx-auto justify-center'>
                    <FaTools className=' mt-4 text-7xl mx-auto justify-center '></FaTools>
                </div>
                <div className=" mb-6 text-center">
                    <h2 className="text-2xl mb-2 font-bold">Largest Dealership</h2>
                    <p>How to park your car at your garage?</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Advantage;