import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
import App2 from './App2';

const Home = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSlideClick = (url) => {
        navigate(url); // Navigate to the specified URL
    };

    return (
        <div className="home-container">
            <center>
                <h1>Home</h1>
            </center>
            <div className="slider-container">
                <Carousel showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true}>
                    <div onClick={() => handleSlideClick('/Books')}>
                        <img className='img1' src="https://i.pinimg.com/736x/b6/5f/f1/b65ff10dab668d783819711affa06974.jpg" height={'100px'} alt="1" />
                    </div>
                    <div onClick={() => handleSlideClick('/Books')}>
                        <img className='img2' src="https://clipart-library.com/2023/13-134390_28-collection-of-book-clipart-png-black-and.png" alt="2" />
                    </div>
                    <div onClick={() => handleSlideClick('/Books')}>
                        <img className='img2' src="https://img.freepik.com/free-vector/vector-stacks-books-black-white-coloring_75487-1776.jpg" alt="3" />
                    </div>
                </Carousel>
            </div>
            <div style={{marginTop:'60px'}}>
                <App2 />
            </div>
        </div>
    );
};

export default Home;
