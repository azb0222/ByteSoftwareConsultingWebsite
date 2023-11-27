import React, { useState } from 'react';
import devTeam from '../assets/DevTeam.gif';
import quote from '../assets/quote.png';
import emailjs from "@emailjs/browser";

const Trusted = ({ title, children }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        projectIdea: '',
        date: ''
    });


    const serviceId = "service_pqvxg07";
    const templateId = "template_9r3vgnn";
    const publicKey = 'Bon2crid1qxaDmgqP';

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
    
        // const templateParams = {
        //     name: formData.name,
        //     email: formData.email,
        //     company: formData.company,
        //     projectIdea: formData.projectIdea,
        //     date: formData.date
        // };
    
        const combinedFormData = Object.values(formData).join(' ');

        const templateParams = {
            message: combinedFormData
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                alert("Sent! We will get in touch with you soon!");
                window.location.reload(); // Reload the page after successful email send
            })
            .catch((error) => {
                console.error("Failed to send email: ", error);
            });
    };
    

    return (
        <div className="flex w-full">
            <div className="flex-1 grid bg-gray-50 rounded-md place-items-center">
                <form className="" onSubmit={handleSubmit}>
                    <h1 className="font-bold mt-8">Name</h1>
                    <input
                        type="text"
                        name="name"
                        placeholder="Type here"
                        className="input  w-full max-w-xs mb-8"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <h1 className="font-bold">Email</h1>

                    <input
                        type="text"
                        name="email"
                        placeholder="Type here"
                        className="input  w-full max-w-xs mb-8"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <h1 className="font-bold">Company</h1>

                    <input
                        type="text"
                        name="company"
                        placeholder="Type here"
                        className="input  w-full max-w-xs mb-8"
                        value={formData.company}
                        onChange={handleChange}
                    />
                    <h1 className="font-bold">Project Idea</h1>


                    <input
                        type="text"
                        name="projectIdea"
                        placeholder="Type here"
                        className="input  w-full max-w-xs mb-8"
                        value={formData.projectIdea}
                        onChange={handleChange}
                    />
                    <h1 className="font-bold">Date & Time</h1>

                    <input
                        type="text"
                        name="date"
                        placeholder="Type here"
                        className="input  w-full max-w-xs mb-8"
                        value={formData.date}
                        onChange={handleChange}
                    />
                    <button type="submit" className="btn bg-[#1D40B0] text-white my-8"> Let's Discuss Your Project </button>
                </form>
            </div>
            <div className="flex-1 grid h-20 card rounded-box flex flex-col">
                <img src={quote} alt="Another Image" className="w-10 h-10 mt-40 left-0 ml-8" />
                <h1 className="text-2xl font-bold text-center">Schedule a free consultation</h1>


                <div className="flex items-center justify-center">
                    <img src={devTeam} alt="Consultation" className="mt-2 w-2/3 h-auto" />
                </div>

                <div className="">
                    <div className="mt-2 grid flex-grow h-32 card rounded-box place-items-center mx-12 font-medium text-center">
                        Get started on your software contracting journey with a complimentary consultation. Discover how our expert team can turn your vision into reality, tailored to your unique needs.
                    </div>

                    <img src={quote} alt="Another Image" className="w-10 h-10 absolute right-8 mb-10 rotate-180" />

                </div>

            </div>
        </div>
    );
};

export default Trusted;
