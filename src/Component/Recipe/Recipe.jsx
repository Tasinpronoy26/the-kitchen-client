import React, { useEffect, useState } from 'react';
import './Recipe.css';
import { BsStarFill, BsStarHalf } from 'react-icons/Bs';
import { ToastContainer, toast } from 'react-toastify';


const Recipe = ({ recipe }) => {

    const [isFavorites, setIsFavorites] = useState(false);

    const handleFavoriteClick = () => {

        if (isFavorites == false) {

            setIsFavorites(true);
            toast("Added to favorites!");

        }

        console.log(isFavorites)

    };






    const { recipeName, recipePicture, cookingMethod, rating, isFavorite } = recipe;

    return (


        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={recipePicture} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-mono ">{recipeName}</h2>
                <h2 className='font-mono font-bold'>Integrediant:</h2>
                < div className='my-5' >
                    {
                        recipe.ingredients.map(integrediant => <li className='list-disc'>{integrediant}</li>)}
                </div>
                <p className='leading-6 mb-'> <p className='font-bold mb-3'>Method:</p> {cookingMethod}</p>

            </div>
            <div className=' grid justify-items-center mb-5 gap-5'>
                <p className='flex gap-2'><BsStarFill></BsStarFill> <BsStarFill></BsStarFill> <BsStarFill></BsStarFill> <BsStarFill></BsStarFill> <BsStarHalf></BsStarHalf>{rating}</p>
                {
                    isFavorites == false ? <button onClick={handleFavoriteClick} className="btn-fav " type="button">
                        <strong> favourite</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>

                        <div id="glow">
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </button> : <></>
                }
                <ToastContainer />

            </div>

        </div>


    );
};

export default Recipe;