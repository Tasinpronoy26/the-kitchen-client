import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const ChefDetails = () => {

    const chefDetail = useLoaderData();
    const { chefName, chefPicture, chefBio, likes, numRecipes, yearsOfExperience } = chefDetail;

    console.log(chefDetail.recipes);

    return (


        <div>
            <div className="hero" >

                <div className="hero-content flex-col lg:flex-row text-start mt-10">
                    <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{chefName}</h1>
                        <div className='3'>
                            <p className='py-2 '>{chefBio}</p>
                            <div className='my-5'>
                                <p>Total Likes: {likes}</p>
                                <p>Total Recipe: {numRecipes}</p>
                                <p>Experience: {yearsOfExperience}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero" >
                <div className='md:grid md:grid-cols-3 grid-cols-1 mb-24 gap-10 mt-10'>
                    {
                        chefDetail.recipes.map(recipe => <Recipe recipe={recipe} key={recipe.chefId}></Recipe>)

                    }
                </div>
            </div>



        </div>
    );
};

export default ChefDetails;