import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Component/AuthProvider/AuthProvider';

const Header = () => {

    const { user , createLogOut } = useContext(AuthContext);

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

            <div className="navbar bg-neutral text-neutral-content ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <a className="btn btn-ghost normal-case text-xl">THE KITCHEN</a>
                    </div>
                </div>
                <div className="navbar-center gap-5">
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/about">About</Link>
                </div>

                {
                    user ? <div className="navbar-end gap-3">
                        <Link to="/register"><button onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">Log Out</button></Link>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photo} />
                            </div>
                        </label>
                    </div> :
                        <div className="navbar-end gap-3">
                            <Link to="/login"><button className="btn btn-ghost normal-case text-xl">Log in</button></Link>
                            <Link to="/register"><button className="btn btn-ghost normal-case text-xl">Register</button></Link>
                        </div>
                }



            </div>


        </div>
    );
};

export default Header;