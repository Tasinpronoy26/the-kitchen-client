import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/Fa';



const Login = () => {
    return (
        <div>

            <div className="hero min-h-screen" id='bg'>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div className="hero-content">

                        <div className="flex-shrink-0 w-full max-w-sm">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className='form-control mt-6 text-white'>
                                    <p>Are you new? Please <Link to="/register">Register</Link></p>
                                </div>
                                <div className='form-control mt-6 text-white'>
                                    <p>Or,</p>
                                </div>
                                <div className='form-control mt-6 text-white gap-2'>
                                    <button className="btn btn-outline btn-info gap-2"><FcGoogle></FcGoogle> Google</button>
                                    <button className="btn btn-outline gap-2"> <FaGithub></FaGithub> Github</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Login;