import { FaHandshake, FaTools } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';
const Advantage = () => {
    return (
        <div>
            <h2 className='text-5xl  mb-10 font-bold text-center my-6'>Extra Advantages</h2>
            <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            <div className='md:w-96 w-full bg-gray-100 hover:bg-gray-200 border-b-4' >
                <div className='mx-auto justify-center'>
                    <FaHandshake className=' mt-4 text-7xl  mx-auto justify-center'></FaHandshake>
                </div>
                <div className=" mb-6 text-center ">
                    <h2 className="text-2xl mb-2 font-bold">Largest Dealership</h2>
                    <p className='px-2'>An addition to selling vehicles, Longo Toyota likely offers a range of services, including vehicle maintenance and repair, parts and accessories sales, and financing options. Large dealerships often have well-equipped service centers to provide comprehensive support to their customers.</p>
                </div>
            </div>
            <div className='md:w-96 w-full bg-gray-200 hover:bg-gray-300'>
                <div className='mx-auto justify-center'>
                    <AiFillCar className=' mt-4 text-7xl  mx-auto justify-center'></AiFillCar>
                </div>
                <div className=" mb-6 text-center">
                    <h2 className="text-2xl mb-2 font-bold">Lower Car Prices</h2>
                    <p className='px-2'>Car dealerships frequently hold sales events during specific seasons or holidays, like the end-of-year clearance sales, Black Friday, or holiday sales events. During these times, you can often find reduced car prices.</p>
                </div>
            </div>
            <div className='md:w-96 w-full bg-gray-100 hover:bg-gray-200 border-b-4'>
                <div className='mx-auto justify-center'>
                    <FaTools className=' mt-4 text-7xl mx-auto justify-center '></FaTools>
                </div>
                <div className=" mb-6 text-center">
                    <h2 className="text-2xl mb-2 font-bold">Life time service</h2>
                    <p className='px-2'>Lifetime service agreements vary widely, but they usually cover a particular product or service. In the context of automobiles, this could refer to a lifetime service warranty or guarantee, typically offered for major vehicle components or specific services.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Advantage;