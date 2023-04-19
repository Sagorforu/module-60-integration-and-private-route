import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProviders';
import { Result } from 'postcss';

const Register = () => {

    const { users, createUser } = useContext(AuthContext);
    console.log(createUser)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl text-black mb-8 font-bold">Please Register !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black text-lg">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered bg-slate-100 text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black text-lg">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered bg-slate-100 text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg label-text text-black">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered bg-slate-100 text-black" />
                            <label className="label">
                                <Link to="/register" className="label-text-alt link link-hover text-black text-base">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <Link to="/login" className="label-text-alt link link-hover text-black text-xl mt-8">Already have an account?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;