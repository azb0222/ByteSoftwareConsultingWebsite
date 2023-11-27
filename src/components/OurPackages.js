import React from 'react';
import team from '../assets/teampurple.png';
import check from '../assets/purplecheck.png'
import coding from '../assets/purplecode.png'
import greenTeam from '../assets/greenTeam.png';
import greenCheck from '../assets/greencheck.png';
import greenCoding from '../assets/greenCode.png';

function OurPackages() {
    return (
        <div class="flex flex-col items-center justify-center min-h-min  text-gray-700  md:p-20">
            <h1 className="text-center font-bold w-full text-l  text-gray-600 ">OUR PACKAGES</h1>
            <h1 className="text-center font-bold mb-4 w-full text-4xl mb-8">Choose what you and your team need</h1>
            <div class="flex flex-wrap items-center justify-center w-full max-w-4xl mt-8">
                <div class="w-72 flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-lg ">
                    <div class="flex flex-col items-center p-10 bg-gray-200">
                        <span class="font-semibold">Frontend</span>

                    </div>
                    <div class="p-10">
                        <ul>
                            <li class="flex items-center mb-3">
                                <img class="w-6 h-6 object-cover" src={greenTeam} alt="Image Description" />
                                <span class="ml-2 text-sm">frontend developers specalized in frontend frameworks + UI/UX designers + project manager</span>
                            </li>
                            <li class="flex items-center mb-3">
                                <img class="w-6 h-6 object-cover" src={greenCoding} alt="Image Description" />
                                <span class="ml-2 text-sm">full frontend development services, where we design the UI and UX for the MVP</span>
                            </li>
                            <li class="flex items-center">
                                <img class="w-6 h-6 object-cover" src={greenCheck} alt="Image Description" />
                                <span class="ml-2 text-sm">backend integration + your choice of frontend framework</span>
                            </li>
                        </ul>
                    </div>
                    <div class="flex px-10 pb-10 justfy-center">
                        <button class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">Get Started</button>
                    </div>
                </div>

                <div class="z-10 w-72 flex flex-col flex-grow mt-8 overflow-hidden transform bg-white rounded-lg shadow-lg md:scale-110">
                    <div class="flex flex-col items-center p-10 bg-[#1D40B0]">
                        <span class="font-semibold text-white text-2xl">FULL STACK</span>
                        <div class="text-white italic">Our most popular package</div>
                    </div>
                    <div class="p-10">
                        <ul>
                            <li class="flex items-center mb-3">
                                <img class="w-6 h-6 object-cover" src={team} alt="Image Description" />
                                <span class="ml-2 text-sm">team of full stack developers + designers + project manager </span>
                            </li>
                            <li class="flex items-center  mb-3">
                                <img class="w-6 h-6 object-cover" src={coding} alt="Image Description" />
                                <span class="ml-2 text-sm">full-fledged custom development, where we go from design to deployment </span>
                            </li>
                            <li class="flex items-center">
                                <img class="w-6 h-6 object-cover" src={check} alt="Image Description" />
                                <span class="ml-2 text-sm">daily stand ups, sprint cycles, documentation, knowledge transfer etc. </span>
                            </li>
                        </ul>
                    </div>
                    <div class="flex px-10 pb-10 justfy-center">
                        <button class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-[#1D40B0] rounded-lg text-white">Get Started</button>
                    </div>
                </div>

                <div class="w-72 flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mt-19">
                    <div class="flex flex-col items-center p-10 bg-gray-200">
                        <span class="font-semibold">Backend</span>
                    </div>
                    <div class="p-10">
                        <ul>
                            <li class="flex items-center mb-3">
                                <img class="w-6 h-6 object-cover" src={greenTeam} alt="Image Description" />

                                <span class="ml-2 text-sm">backend developers specialized in server-side languages/frameworks + project manager</span>
                            </li>
                            <li class="flex items-center mb-3">
                                <img class="w-6 h-6 object-cover" src={greenCoding} alt="Image Description" />

                                <span class="ml-2 text-sm">development focused on server-side logic, database design, API development, and data processing</span>
                            </li>
                            <li class="flex items-center">
                                <img class="w-6 h-6 object-cover" src={greenCheck} alt="Image Description" />

                                <span class="ml-2 text-sm">frontend integration + your choice of tech stack 
</span>
                            </li>
                        </ul>
                    </div>
                    <div class="flex px-10 pb-10 justfy-center">
                        <button class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurPackages;
