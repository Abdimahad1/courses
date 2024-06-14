import React from 'react';
import teamMember1 from '../images/nature 5.jpg';
import teamMember2 from '../images/nature 6.jpg';
import teamMember3 from '../images/nature4.jpg';
import starIcon from '../images/star.png'; 

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4 my-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img src={teamMember1} alt="About Us" className="rounded-lg border-2 border-gray-300" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra tellus nec eleifend tempor. 
            Vestibulum id magna vel urna posuere semper a vel augue. Nulla facilisi. Vestibulum dapibus sapien 
            non ex fermentum, ut congue lorem dapibus.
          </p>
          <p>
            Duis interdum, orci eget varius efficitur, ipsum purus vestibulum nisi, nec maximus ipsum lorem ut 
            lacus. Morbi a velit sed erat faucibus vehicula. Sed feugiat orci sit amet felis consequat, at 
            eleifend ex faucibus.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img src={teamMember1} alt="John Doe" className="rounded-lg border-2 border-gray-300 mb-4" />
            <h3 className="text-lg font-bold">John Doe</h3>
            <p>Course Instructor</p>
          </div>
          <div className="text-center">
            <img src={teamMember2} alt="Jane Smith" className="rounded-lg border-2 border-gray-300 mb-4" />
            <h3 className="text-lg font-bold">Jane Smith</h3>
            <p>Course Instructor</p>
          </div>
          <div className="text-center">
            <img src={teamMember3} alt="Sam Brown" className="rounded-lg border-2 border-gray-300 mb-4" />
            <h3 className="text-lg font-bold">Sam Brown</h3>
            <p>Course Instructor</p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <img src={starIcon} alt="Star Icon" className="inline-block w-6 h-6 mx-2" />
        <img src={starIcon} alt="Star Icon" className="inline-block w-6 h-6 mx-2" />
        <img src={starIcon} alt="Star Icon" className="inline-block w-6 h-6 mx-2" />
        <img src={starIcon} alt="Star Icon" className="inline-block w-6 h-6 mx-2" />
        <img src={starIcon} alt="Star Icon" className="inline-block w-6 h-6 mx-2" />
      </div>
    </div>
  );
};

export default AboutUs;
