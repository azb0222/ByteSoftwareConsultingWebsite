import React from 'react';
import team from "../assets/icons8-team-480.png"
import Knowledge from "../assets/icons8-knowledge-512.png"
import tech from "../assets/icons8-laptop-384.png"

function ByteDifferent(props) {
    // You can access props here

    // Event handlers or custom functions
    const handleClick = () => {
        // Handle events or perform custom logic
    };

    return (
        <div className="bg-gray-50 pb-10 pt-8">
            <div className="text-center font-bold mt-4 mb-4 w-full text-2xl mb-8">What makes Byte Software so different? </div>
            <div className="flex flex-col lg:flex-row mx-10">
                <div className="grid flex-grow card rounded-box place-items-right gap-y-2">
                    <div class="rounded w-10 h-10 bg-[#1D40B0]">
                        <img src={team} className="" alt="Logo" />
                    </div>
                    <div class="font-bold"> Our Team </div>
                    <div class="mb-2"> High-quality development teams for a monthly subscription, featuring excellent talent and efficiency. We have a range of talent  </div>
                    <div class="text-[#1D40B0] font-semibold text-base"> Learn More ➜ </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow card rounded-box place-items-right gap-y-2">
                    <div class="rounded w-10 h-10 bg-[#1D40B0]">
                        <img src={Knowledge} className="" alt="Logo" />
                    </div>
                    <div class="font-bold"> Our Knowledge </div>
                    <div class="mb-2"> From healthcare to finance and beyond, our holistic expertise ensures customized solutions that exceed expectations.</div>
                    <div class="text-[#1D40B0] font-semibold text-base"> Learn More ➜ </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow card rounded-box place-items-right gap-y-2">
                    <div class="flex justify-center items-center rounded w-10 h-10 bg-[#1D40B0]">
                        <img src={tech} className="w-9 h-9" alt="Logo" />
                    </div>

                    <div class="font-bold"> Our Expertise </div>
                    <div class="mb-2"> Several years of experience dedicated to designing, building, and deploying products that have made an impact.
                    </div>
                    <div class="text-[#1D40B0] font-semibold text-base"> Learn More ➜ </div></div>
            </div>

        </div>
    );
}

export default ByteDifferent;
