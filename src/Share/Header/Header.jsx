import { Container } from 'postcss';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <div className="navbar bg-neutral text-neutral-content ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <a className="btn btn-ghost normal-case text-xl">THE KITCHEN</a>
                    </div>
                </div>
                <div className="navbar-center gap-5">
                    <Link>Home</Link>
                    <Link>Blog</Link>
                    <Link>About</Link>
                </div>
                <div className="navbar-end gap-3">
                    <button><a className="btn btn-ghost normal-case text-xl">Log in</a></button>
                    <button><a className="btn btn-ghost normal-case text-xl">Register</a></button>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={[]} />
                        </div>
                    </label>
                </div>
            </div>

        </div>
    );
};

export default Header;