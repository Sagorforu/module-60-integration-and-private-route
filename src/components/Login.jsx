import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProviders';

const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        form.reset();

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .then(error => {
            console.log(error)
        })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl text-black mb-8 font-bold">Please Login !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <button onClick={handleGoogleSignIn} className="btn btn-active btn-primary">Login with Google</button>

                        <Link to="/register" className="label-text-alt link link-hover text-black text-xl mt-8">New to auth master? Please Register</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;