import React, { useEffect, useState } from 'react';
import img1 from '../../assets/img1.jpg.jpg';
import './Home.css';
import Chef from '../Chef/Chef';


const Home = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))


    }, [])

    console.log(chefs);


    return (
        <div>
            <div className="hero min-h-screen" >
                <div className="hero-overlay bg-white"></div>
                <div className="hero-content text-start text-neutral-content">
                    <div className="max-w-md text-black">
                        <h1 className="mb-5 text-5xl font-bold ">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        

                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <img src={img1} className="w-full" alt="Tailwind CSS Carousel component" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="hero min-h-screen" >
                <div className='grid grid-cols-3 m-10 gap-10 '>
                    {
                        chefs.map(chef => <Chef key={chef.chefId} chef={chef}></Chef>)
                    }
                </div>

            </div>


        </div>
    );
};

export default Home;