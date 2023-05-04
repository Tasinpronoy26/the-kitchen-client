import React from 'react';
import './Chef.css';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {

    const { chefId, chefName, chefPicture, yearsOfExperience, numRecipes, likes } = chef;


    return (
        <div>
            <div className="card w-80 h-full bg-base-100 shadow-xl">
                <figure><img src={chefPicture} className='w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className="card-title font-bold">{chefName}</h1>
                    <p className='font-serif'>Experience : {yearsOfExperience}</p>
                    <p className='font-serif'>Total Recipe : {numRecipes}</p>
                    <p className='font-serif'>Total Likes : {likes}</p>
                    <Link className='mt-3' to={`/${chefId}`}><button className="button-chef" >
                        Recipes
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;