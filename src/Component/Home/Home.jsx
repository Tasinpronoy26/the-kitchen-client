import React, { useEffect, useState } from 'react';
import img1 from '../../assets/img1.jpg.jpg';
import './Home.css';
import Chef from '../Chef/Chef';
import Marquee from "react-fast-marquee";
import image1 from './../../assets/1.jpg';
import image2 from './../../assets/2.jpg';
import image3 from './../../assets/3.jpg';
import image4 from './../../assets/4.jpg';


const Home = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://the-kitchen-server-tasinpronoy56-gmailcom.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))


    }, [])

    // console.log(chefs);


    return (
        <div>
            <div className="hero min-h-screen" >
                <div className="hero-overlay bg-white "></div>
                <div className="md:hero-content text-center text-neutral-content">
                    <div className="max-w-md text-black">
                        <h1 className="mb-5 text-5xl font-bold font-serif sm:mt-20">THE <span className='text-red-200'>KITCHEN</span></h1>
                        <p className="mb-5">The kitchen is a country in which there are always discoveries to be made.</p>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>


                    <div className="carousel w-64 h-84">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={image1} className="w-64 h-84" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className=" btn-circle">❮</a>
                                <a href="#slide2" className=" btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={image2} className="w-64 h-84" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className=" btn-circle">❮</a>
                                <a href="#slide3" className=" btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={image3} className="w-64 h-84" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn-circle">❮</a>
                                <a href="#slide4" className="btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={image4} className="w-64 h-84" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn-circle">❮</a>
                                <a href="#slide1" className="btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <h1 className="mb-5 text-5xl font-bold text-center font-serif sm:mt-20">Our Beloved <span className='text-red-200'>Chef</span></h1>

            <div className="hero min-h-screen" >

                <div className='md:grid grid-cols-3 m-10 gap-10'>

                    {
                        chefs.map(chef => <Chef key={chef.chefId} chef={chef}></Chef>)
                    }
                </div>

            </div>

            <h1 className="mt-5 text-5xl font-bold text-center font-serif">Special <span className='text-red-200'>Recipe</span></h1>

            <Marquee speed={50}>
                <div className="hero " >

                    <div className='flex m-10 gap-10 '>

                        <div className="card-body">
                            <figure><img className='w-full h-48' src={image1} alt="Shoes" /></figure>
                            <h2 className="card-title">
                                Teriyaki Chicken Stir Fry
                                <div className="badge badge-secondary">20%</div>
                            </h2>

                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Order</div>

                            </div>
                        </div>
                        <div className="card-body">
                            <figure><img className='w-full h-48' src={image2} alt="Shoes" /></figure>
                            <h2 className="card-title">
                                Spicy Black Bean
                                <div className="badge badge-secondary">30%</div>
                            </h2>

                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Order</div>

                            </div>
                        </div>
                        <div className="card-body">
                            <figure><img className='w-full h-48' src={image3} alt="Shoes" /></figure>
                            <h2 className="card-title">
                                Mushroom Risotto
                                <div className="badge badge-secondary">10%</div>
                            </h2>

                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Order</div>

                            </div>
                        </div>
                        <div className="card-body">
                            <figure><img className='w-full h-48' src={image4} alt="Shoes" /></figure>
                            <h2 className="card-title">
                                Grilled Lemon Salmon
                                <div className="badge badge-secondary">20%</div>
                            </h2>

                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Order</div>

                            </div>
                        </div>

                    </div>
                </div>
            </Marquee>


        </div>
    );
};

export default Home;