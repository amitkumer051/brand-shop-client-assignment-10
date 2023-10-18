import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form =event.target;
        const name =form.name.value;
        const photo =form.photo.value;
        const email =form.email.value;
        const password =form.password.value;
        const users={name,photo,email,password}
        console.log(users);

        if (password.length < 6) {
            Swal.fire('Password should be at least 6 characters or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire('Your password need one upper case characters.')
            return;
        }
        else if (!/[#$%&?]/.test(password)) {
            Swal.fire('Your password need one Special characters.')
            return;
        }

        createUser(email, password,name,photo)
            .then(result => {
                console.log(result.user);
                Swal.fire('Registration Successfull')
                form.reset();
            })
            .catch(error => {
                console.error(error)
                Swal.fire(error.message);
                form.reset()
            })
    }
    return (
        <div className="hero py-14 bg-base-200">
            <div className="rounded-md flex-shrink-0 w-full max-w-xl  bg-base-100 p-8">
                <h2 className="text-center text-2xl pb-2 font-extrabold">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Photo url" name="photo" className="input input-bordered" required />
                    </div>
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
                        <button className="bg-red-400  hover:bg-red-500  p-2 rounded-md text-white font-bold">Register</button>
                    </div>
                    <div className="text-center">
                        <h2>Already have an account? Please <Link to='/login'><span className="text-blue-600 font-bold">Login</span></Link></h2>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;