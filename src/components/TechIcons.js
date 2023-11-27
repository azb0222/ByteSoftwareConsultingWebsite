import React from 'react';
import googleCloud from '../assets/techIcons/googleCloud.png';
import k8 from '../assets/techIcons/k8.png';
import reactNative from '../assets/techIcons/reactNative.png';
import aws from '../assets/techIcons/aws.png';
import php from '../assets/techIcons/php.png';
import docker from '../assets/techIcons/docker.png';
import terraform from '../assets/techIcons/terraform.png';
import swift from '../assets/techIcons/swift.png';
import node from '../assets/techIcons/node.png';
import ruby from '../assets/techIcons/ruby.png';
import python from '../assets/techIcons/python.png';
import laravel from '../assets/techIcons/laravel.png';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechIcons = () => {
    var settings = {
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 6
        autoplay: true,
        autoplaySpeed: 500, 
        slidesToShow: 6, 
        infinite: true, 
        
    };
    return (
        <div>
            <link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />

            {/* <Slider {...settings}>
                <div className="carousel carousel-center rounded-box">
                    <div className="carousel-item">
                        <img src={aws} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={googleCloud} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={k8} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={reactNative} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={docker} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={php} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={terraform} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={swift} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={node} alt="Pizza" width="150" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={ruby} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={python} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={laravel} alt="Pizza" width="100" height="100" />
                    </div>
                </div>
            </Slider> */}


            <Slider {...settings}>
            <div className="carousel-item">
                        <img src={aws} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={googleCloud} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={k8} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={reactNative} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={docker} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={php} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={terraform} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={swift} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={node} alt="Pizza" width="150" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={ruby} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={python} alt="Pizza" width="100" height="100" />
                    </div>
                    <div className="carousel-item">
                        <img src={laravel} alt="Pizza" width="100" height="100" />
                    </div>
            </Slider>
        </div>
    );
};


export default TechIcons;
