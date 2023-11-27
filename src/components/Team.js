import React from 'react';
import asrithaPicture from '../assets/asritha.jpeg';
import owenPicture from '../assets/owen.png';

const Team = () => {
    return (
        <div className="text-center mb-4 bg-gray-50 py-10"> {/* Apply bg-blue-100 for a light blue background */}
            <h1 className="font-bold text-4xl mb-6">Our Talent</h1>
            <div className="join mx-28">
                <div className="flex space-x-20">
                    {/* Wrap grid divs in a flex container */}
                    <div className="flex"> {/* Add a flex container here */}
                        <div className="grid">
                            <div className="avatar">
                                <div className="w-48 rounded-full mx-auto scale-2x">
                                    <img src={asrithaPicture} alt="Asritha's Picture" />
                                </div>
                            </div>
                            <h4 className="text-2xl"><strong>Asritha Bodepudi</strong></h4>
                            <p className="text-xl">Lead Full Stack Developer</p>
                        </div>
                    </div>
                    
                    <div className="flex"> {/* Add a flex container here */}
                        <div className="grid">
                            <div className="avatar">
                                <div className="w-48 rounded-full mx-auto scale-2x">
                                    <img src={owenPicture} alt="Owen's Picture" />
                                </div>
                            </div>
                            <h4 className="text-2xl"><strong>Owen Mullins</strong></h4>
                            <p className="text-xl">Web Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
