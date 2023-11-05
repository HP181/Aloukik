import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div className='bg-gray-100'>
    <Navbar />
    <div className="min-h-screen p-8 mt-10">
    
   
      <div className=" ">
        <h1 className="text-3xl font-semibold text-green-600 mb-4">
          About Greenways Environments
        </h1>
        <p className="text-gray-700 mb-6">
          At Greenways Environments, we are dedicated to making a significant and positive impact on the environment through our expert consultancy services. We understand the pressing need for sustainable practices, conservation, and responsible resource management. With a passionate team of experienced environmental consultants, we strive to offer innovative solutions and strategies that address the challenges facing our planet today.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          Our mission is to provide comprehensive environmental consultancy services that empower businesses, organizations, and communities to achieve their goals while prioritizing environmental sustainability. We aim to be at the forefront of fostering a healthier planet by offering tailored, forward-thinking solutions to our clients.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">What Sets Us Apart</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <strong>Expertise:</strong> Our team comprises industry experts, scientists, and consultants with a deep understanding of environmental issues and a commitment to finding practical, efficient, and sustainable solutions.
          </li>
          <li>
            <strong>Tailored Solutions:</strong> We recognize that every client has unique needs. Therefore, we craft bespoke strategies that align with individual goals and circumstances.
          </li>
          <li>
            <strong>Innovation:</strong> We are dedicated to staying at the forefront of innovation in the environmental sector. By leveraging the latest technologies and methodologies, we offer cutting-edge solutions to our clients.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Services</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Environmental Impact Assessments</li>
          <li>Sustainable Development Planning</li>
          <li>Waste Management Strategies</li>
          <li>Energy Efficiency Audits</li>
          <li>Ecosystem Restoration Projects</li>
          <li>Environmental Compliance and Permitting</li>
          <li>Climate Change Mitigation and Adaptation Strategies</li>
          <li>And much more...</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Commitment</h2>
        <p className="text-gray-700 mb-6">
          We are committed to integrity, excellence, and environmental stewardship. Our goal is not only to meet but exceed the expectations of our clients by delivering high-quality, sustainable solutions while maintaining the highest ethical standards.
        </p>

        <p className="text-gray-700">
          At Greenways Environments, we firmly believe that by working together with our clients and communities, we can make a meaningful difference in preserving our planet for future generations.
        </p>
      </div>
 
  </div>
      <Footer />
    </div>
    
  );
};

export default About;
