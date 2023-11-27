import React from 'react';
import Card from './Card.js'
import cloudSoftware from '../assets/cloudDev.png';
import mobileDev from '../assets/mobileDev.png';
import softwareDev from '../assets/softwareDev.png';
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
const Expertise = () => {
  return (
    <div className="p-4 flex flex-col items-center"> {/* Added flex and items-center to center children vertically */}
      {/* <h1 className="text-center font-bold mb-4 w-full text-2xl mt-17">Our Expertise</h1>
      <div className="w-full justify-center ml-25">
       
      </div>

      <div className="flex space-x-4 justify-center"> 

        <Card
          imagePath={softwareDev}
          title="Full Stack Development"
          bodyText="We excel in full stack development: we work with in demand frontend frameworks such as React, Angular, and Vue.js to craft dynamic user interfaces and also several backend technologies including Node.js, Express.js, Ruby on Rails, Django, and Laravel to meet your business requirements."
        />

        <Card
          imagePath={cloudSoftware}
          title="Cloud Services"
          bodyText="We have a certified team of cloud architects and engineers to guide your journey across platforms like Google Cloud, AWS, Azure, and more. We're adept in tools such as Kubernetes, Docker, Terraform, and Ansible and dedicated to building seamless and dynamic cloud operations.     "
        />

        <Card
          imagePath={mobileDev}
          title="Mobile App Development"
          bodyText="We will walk you through the full mobile development lifecycle, from design to frontend development to backend integrations and final publishing to the app stores. We specialize in crafting apps with the versatility of React Native and the precision of native iOS development, and help you transform your vision into a tangible, top-tier mobile experience.    "
        />


      </div> */}
      <h1 className="text-center font-bold w-full text-l mt-17 mt-5 text-gray-600 ">OUR EXPERTISE</h1>
      <h1 className="text-center font-bold mb-4 w-full text-4xl mb-8">We will work with your tech stack</h1>
      <ul className="steps w-5/6 mx-auto">
        <li data-content="" className="step font-bold text-xl neutral-content ">
          <div className="flex flex-col items-center"> {/* Flex container with vertical stacking and horizontal centering */}
            <img src={softwareDev} className="mt-7 rounded-lg mb-2 w-14 h-14" alt="Logo" />
            <div> Full Stack Development </div>
            <div className="text-sm font-normal text-center mt-3"> {/* Centered text */}
              <ul className="menu w-56">
                <li>
                  <ul>
                    <li class="flex">
                      <div>
                        <img src={reactNative} alt="React Native Logo" class="w-6 h-6 mr-2" />
                        <a class="font-semibold">React</a>
                      </div>
                    </li>
                    <li class="flex">
                      <div>
                        <img src={laravel} alt="React Native Logo" class="w-6 h-6 mr-2" />
                        <a class="font-semibold">Laravel</a>
                      </div>
                    </li>

                    <li class="flex">
                      <div>
                        <img src={node} alt="React Native Logo" class="w-6 h-6 mr-2" />
                        <a class="font-semibold">Node</a>
                      </div>
                    </li>
                    <li class="flex">
                      <div>
                        <img src={python} alt="React Native Logo" class="w-6 h-6 mr-2" />
                        <a class="font-semibold">Django</a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li data-content="" className="step font-bold text-xl neutral-content ">
          <div className="flex flex-col items-center"> {/* Flex container with vertical stacking and horizontal centering */}
            <img src={cloudSoftware} className="mt-7 rounded-lg mb-2 w-14 h-14" alt="Logo" />
            <div> Cloud Services </div>
            <div className="text-sm font-normal text-center mt-3"> {/* Centered text */}
              <ul className="menu w-56">
                <li>
                  <ul>
                    <li class="flex">
                      <div>
                        <img src={aws} alt="React Native Logo" class="w-6 h-6 mr-2" />
                        <a class="font-semibold">AWS</a>
                      </div>
                    </li>
                    <li class="flex">
                      <div>
                        <img src={googleCloud} alt="React Native Logo" class="w-6 h-6 mr-2" />
                        <a class="font-semibold">GCP</a>
                      </div>
                    </li>

                    <li class="flex">
                      <div>
                        <img src={docker} alt="React Native Logo" class="w-6 h-6 mr-2" />
                        <a class="font-semibold">Docker</a>
                      </div>
                    </li>
                    <li class="flex">
                      <div>
                        <img src={k8} alt="React Native Logo" class="w-6 h-6 mr-2" />
                        <a class="font-semibold">Kubernetes</a>
                      </div>
                    </li>
                    <li class="flex">
                      <div>
                        <img src={terraform} alt="React Native Logo" class="w-6 h-6 mr-2" />
                        <a class="font-semibold">Terraform</a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li data-content="" className="step font-bold text-xl">
        <div className="flex flex-col items-center"> {/* Flex container with vertical stacking and horizontal centering */}
            <img src={mobileDev} className="mt-7 rounded-lg mb-2 w-14 h-14" alt="Logo" />
            <div> App Development </div>
            <div className="text-sm font-normal text-center mt-3"> {/* Centered text */}
              <ul className="menu w-56">
                <li>
                  <ul>
                    <li class="flex">
                      <div>
                        <img src={swift} alt="React Native Logo" class="w-6 h-6 mr-2" />
                        <a class="font-semibold">Swift</a>
                      </div>
                    </li>
                    <li class="flex">
                      <div>
                        <img src={reactNative} alt="React Native Logo" class="w-6 h-6 mr-2" />
                        <a class="font-semibold">React Native</a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Expertise;



