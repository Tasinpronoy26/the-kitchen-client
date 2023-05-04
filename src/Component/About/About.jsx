import React from 'react';
import './About.css';


const About = () => {
    return (
        <div>

            <div className="hero min-h-screen" id='about-bg'>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold font-serif">The <span className='text-red-200'>KITCHEN</span></h1>
                        <p className="mb-5">The kitchen is a room in a home or commercial establishment where food is prepared and cooked. It typically contains appliances such as a stove, oven, refrigerator, and sink, as well as various tools and utensils for cooking and food preparation, such as pots and pans, knives, cutting boards, and mixing bowls.

                            In many cultures, the kitchen is considered the heart of the home, as it is often where families gather to cook, eat, and socialize. It is also a place where people can express their creativity and experiment with different ingredients and recipes.

                            The design and layout of a kitchen can vary depending on factors such as the size of the space, the number of people who will be using it, and the style and preferences of the occupants. Some popular kitchen styles include modern, traditional, farmhouse, and minimalist. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;