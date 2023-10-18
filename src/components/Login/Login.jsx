import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {userLogin} =useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const users = { email, password }
        console.log(users);

        userLogin(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire('Login Successfull')
                form.reset();
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                Swal.fire(error.message)
                form.reset();
            })
    }
    return (

        <div className="hero py-14 bg-base-200">
            <div className="rounded-md flex-shrink-0 w-full max-w-md  bg-base-100 p-8">
                <h2 className="text-center text-2xl pb-2 font-extrabold">Please Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered input-primary" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered input-primary" required />
                    </div>
                    <div className="form-control mt-6 mb-3">
                        <button className="bg-red-400  hover:bg-red-500  p-2 rounded-md text-white font-bold">Login</button>
                    </div>
                    <div>
                        <h2 className="text-center mb-3">Do not have an account? Please <Link to='/register'><span className="text-blue-600 font-bold">Register</span></Link></h2>
                        <div>
                            <button className="flex  mx-auto items-center text-center rounded-md gap-1 p-2 bg-gray-200 hover:bg-gray-300 text-sm  font-semibold">Google Login <FcGoogle className="text-xl text-center "></FcGoogle></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;