import React from 'react';
import heroDev from '../assets/heroDev.gif';

const Hero = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="hero flex w-full">

        {/* Image Div */}
        <div className="flex-1">
          <img src={heroDev} className="w-full h-full object-cover rounded-lg" alt="Developer Hero Image" />
        </div>

        {/* Text Div */}
        <div className="flex-1 p-8 relative flex items-center">
          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-6xl font-bold ">Building your MVP doesn't have to be expensive or painful</h1>
            <p className="py-6 text-2xl font-medium">Byte Software Consulting delivers quality products to accelerate your startup</p>
            
            <button className="btn btn-primary mr-3 bg-[#1D40B0] text-white">Contact Us</button>
            <button className="btn btn-grey-300">Book a Consultation</button>
            <div>
              <div className="rating mt-5">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
