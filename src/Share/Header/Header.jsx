import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Component/AuthProvider/AuthProvider';
import Active from '../../Component/ActiveLink/Active';

const Header = () => {

    const { user, createLogOut } = useContext(AuthContext);

    const handleLogOut = () => {


        createLogOut()
            .then(result => {

            })
            .catch(error => {
                console.log(error);
            })
    }



    return (
        <div>

            <div className="navbar bg-neutral text-neutral-content w-full h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <Link to="/"><a className="btn btn-ghost normal-case text-xl font-bold font-serif">THE <span className='text-red-200 ms-1'>KITCHEN</span></a></Link>
                    </div>
                </div>
                <div className="navbar-center gap-5">
                    <Active to="/">Home</Active>
                    <Active to="/about">About</Active>
                    <Active to="/blog">Blog</Active>
                </div>



                {
                    user ? <div className="navbar-end gap-3">

                        <div className="tooltip" data-tip={user.displayName}>
                            <div className="w-10 rounded-full ">
                                <img className='w-24 rounded-full' src={user.photoURL} />
                            </div>
                        </div>
                        <Link to="/register"><button onClick={handleLogOut} className="btn btn-ghost normal-case text-xl text-sm">Log Out</button></Link>
                    </div> :
                        <div className="navbar-end gap-3">
                            <Link to="/login"><button className="btn btn-ghost normal-case text-xl text-sm">Log in</button></Link>
                            <Link to="/register"><button className="btn btn-ghost normal-case text-xl text-sm">Register</button></Link>
                        </div>
                }



            </div>


        </div >
    )
};



export default Header;