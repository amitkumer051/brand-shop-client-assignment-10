import { Link } from "react-router-dom";

const Login = () => {
    return (

        <div className="hero py-14 bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-md  bg-base-100 p-8">
                <h2 className="text-center text-2xl pb-2 font-extrabold">Please Login</h2>
                <form className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 mb-3">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                        <h2>Do not have an account? Please <Link to='/register'><span className="text-blue-600 font-bold">Register</span></Link></h2>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;