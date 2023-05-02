import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/Fa';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import app from '../../Firebase/firebase.config';


const Login = () => {


    const auth = getAuth(app);

    const handleLogIn = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        if (form.email.value == "") {

            toast('Please type your email!!!!')
        }
        else if (form.password.value == "") {

            toast('Please type your password!!!!')
        }

        else {
            signInWithEmailAndPassword(auth, email, password)
                .then((result) => {

                    const user = result.user;
                    console.log(user);
                    toast("Log in successfully!!!!!!!")
                })
                .catch((error) => {

                    
                    toast("Email/Password is incorrect!");

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
                            <form onSubmit={handleLogIn} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input text-black input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input text-black input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className='form-control mt-6 text-white'>
                                    <p>Are you new? Please <Link to="/register"><span className='text-primary'>Register</span></Link></p>
                                </div>
                                <div className='form-control mt-6 text-white'>
                                    <p>Or,</p>
                                </div>
                                <div className="divider"></div>
                                <div className='form-control mt-6 text-white gap-2'>
                                    <button className="btn btn-outline btn-info gap-2"><FcGoogle></FcGoogle> Google</button>
                                    <button className="btn btn-outline gap-2"> <FaGithub></FaGithub> Github</button>
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

export default Login;