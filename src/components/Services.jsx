import React from 'react';
import webDesignerImage from '../assets/design.png';
import developerImage from '../assets/frontend.png';
import uiDesignerImage from '../assets/ui.png';

const ServiceCard = ({ icon, title, details, image }) => {
  return (
    <div className="w-full px-4 md:w-1/2  object-center lg:w-1/3">
      <div className=" object-center mb-8 rounded-lg bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
        <div className=" mb-12 flex p-3 items-center justify-center rounded-full bg-primary">
          <img className="hover:object-top w-40" src={image} alt="" />
          
        </div>
        {icon}
        <h4 className="mb-3 text-xl font-semibold text-dark">{title}</h4>
        <p className="text-body-color">{details}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div id="service" className="max-w-screen-xl mx-auto md:pl-20 p-4 py-16">
      <h1 className="py-8 text-4xl font-bold text-center text-[#000]">Services</h1>
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <p className="text-base text-body-color">
                I have worked on a number of projects, they are all described separately but they belong to a full-stack developer.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <ServiceCard
            title="Web Designer"
            details="I made some websites as school projects that mainly had to do with design. that websites include: Arne quinze, Gentse feesten, Ailiv."
            image={webDesignerImage}
          />
          <ServiceCard
            title="Front/Back-end Developer"
            details="This part, contains more attention on coding, but also effective coding with javascript. I also made a number of school projects such as: Tinder, Spotify-api, Movie-app."
            image={developerImage}
          />
          <ServiceCard
            title="UI/UX Designer"
            details="As a UI/UX designer I also had a number of copies that I had to make for school projects such as: Walking-app."
            image={uiDesignerImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
