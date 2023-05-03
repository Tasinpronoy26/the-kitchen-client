import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Register = () => {

    const auth = getAuth(app);

    const { createRegister } = useContext(AuthContext);

    const handleRegister = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        if (!password > 6) {

            toast("Password is less than 6 characters");
        }

        else {

            createRegister(email, password)
                .then((result) => {
                    const user = result.user;
                    console.log(user);
                    toast("Account Create Successfully!!");
                    form.reset();
                })
                .catch((error) => {

                    const errorMessage = error.message;
                    toast(errorMessage);

                });

        }

    }

   



    return (
        <div>
            <div className="hero min-h-screen" id='bg'>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div className="hero-content">

                        <div className="flex-shrink-0 w-full max-w-sm">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input text-black input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input text-black input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input text-black input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo URL " className="input text-black input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className='form-control mt-6 text-white'>
                                    <p>Already have a account? Please <Link to="/login"><span className='text-primary'>Log in</span></Link></p>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;