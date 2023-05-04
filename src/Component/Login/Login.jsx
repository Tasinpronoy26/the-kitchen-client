import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/Fa';
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import app from '../../Firebase/firebase.config';
import { AuthContext } from '../AuthProvider/AuthProvider';



const Login = () => {


    const { user, createLogIn, createGoogleSignIn, createGithubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

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
            createLogIn(email, password)
                .then((result) => {

                    const user = result.user;
                    console.log(user);
                    navigate('/');
                    toast("Log in successfully!!!!!!!")
                })
                .catch((error) => {


                    toast("Email/Password is incorrect!");

                });
        }

    }


    const provider = new GoogleAuthProvider();

    const [google, setGoogle] = useState({});


    const handleGoogleSignIn = () => {

        createGoogleSignIn(provider)
            .then(result => {

                const user = result.user;
                setGoogle(user);
                navigate('/');
                form.reset();
            })
            .catch(error => {
                setGoogle(error);
            })


    }

    

    const handleGithubSignIn = () => {

        createGithubSignIn(provider)
            .then(result => {

                const user = result.user;
                navigate('/')
                setGoogle(user);
            })
            .catch(error => {
                setGoogle(error);
            })


    }




    return (
        <div>

            <div className="hero min-h-screen " id='bg'>
                <div className="hero-overlay bg-opacity-60">
                    <div className="hero-content text-center text-neutral-content">
                        <div className=''>
                            <div className='text-xl'>The Kitchen</div>
                            <div className="grid flex-grow h-32  rounded-box place-items-center"> The kitchen is often the heart of the home, where family and friends gather to cook, eat, and socialize. <br /> It's a space where memories are made and <br /> traditions are passed down.</div>
                        </div>
                        <div className="divider lg:divider-horizontal"></div>

                        <div className="hero-content ">

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
                                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info gap-2"><FcGoogle></FcGoogle> Google</button>
                                        <button onClick={handleGithubSignIn} className="btn btn-outline gap-2"> <FaGithub></FaGithub> Github</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>


    );
};

export default Login;