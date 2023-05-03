import React from 'react';
import './Chef.css';

const Chef = ({ chef }) => {

    const { chefName, chefPicture, yearsOfExperience, numRecipes, likes } = chef;

    return (
        <div>
            <div className="card w-80 h-full bg-base-100 shadow-xl ">
                <figure><img src={chefPicture} className='w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className="card-title ">{chefName}</h1>
                    <p>Experience : {yearsOfExperience}</p>
                    <p>Total Recipe : {numRecipes}</p>
                    <p>Total Likes : {likes}</p>
                    <button className="button-chef" >
                        Recipes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chef;