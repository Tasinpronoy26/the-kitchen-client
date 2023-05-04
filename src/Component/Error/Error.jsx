import React from 'react';
import img from '../../assets/5203299.jpg';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className='grid justify-items-center'>
            <div className="card w-96 ">
                <div className="card-body items-center text-center">
                    <img src={img} alt="" />

                    <Link to="/"><div className="card-actions justify-end">
                        <button className="btn btn-primary">Go to back</button>

                    </div></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;