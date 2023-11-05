import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Services = () => {
  const services = [
    {
      title: "Environmental Impact Assessments (EIAs)",
      description: "Conducting comprehensive assessments to determine the potential environmental effects of proposed projects, helping clients understand and mitigate their impact on the environment.",
    },
    {
      title: "Sustainable Development Planning",
      description: "Assisting clients in developing and implementing strategies that integrate economic, social, and environmental sustainability into their projects and operations.",
    },
    {
      title: "Waste Management Strategies",
      description: "Creating efficient and environmentally friendly waste management plans, including recycling, reduction, and proper disposal methods.",
    },
    {
      title: "Energy Efficiency Audits",
      description: "Evaluating energy use and identifying opportunities for conservation and efficiency improvements, reducing carbon footprint and operational costs.",
    },
    {
      title: "Ecosystem Restoration Projects",
      description: "Designing and implementing initiatives to restore and conserve ecosystems affected by human activities or natural disasters.",
    },
    {
      title: "Environmental Compliance and Permitting",
      description: "Guiding clients through the complex web of environmental regulations, ensuring legal compliance and acquiring necessary permits.",
    },
    {
      title: "Climate Change Mitigation and Adaptation Strategies",
      description: "Developing plans to mitigate the impact of climate change and adapt to changing environmental conditions.",
    },
    {
      title: "Water Resource Management",
      description: "Assessing and managing water resources sustainably, including water quality testing, conservation strategies, and watershed management.",
    },
    {
      title: "Biodiversity Conservation Planning",
      description: "Creating strategies to protect and enhance biodiversity, including habitat conservation and species protection measures.",
    },
    {
      title: "Carbon Footprint Assessments and Reduction Plans",
      description: "Evaluating carbon emissions and devising strategies to minimize a company's carbon footprint, including offsetting measures.",
    },
    {
      title: "Green Building and Design Consultation",
      description: "Providing guidance on sustainable design practices for buildings and infrastructure, focusing on energy efficiency, renewable energy integration, and eco-friendly materials.",
    },
    {
      title: "Environmental Education and Training",
      description: "Conducting workshops, training, and educational programs to increase environmental awareness and promote sustainability within organizations.",
    },
    {
      title: "Ecological Risk Assessments",
      description: "Analyzing potential risks posed to ecosystems and wildlife, and developing mitigation strategies to minimize those risks.",
    },
    {
      title: "Sustainability Reporting and Certifications",
      description: "Assisting companies in preparing sustainability reports and obtaining certifications to showcase their commitment to environmental responsibility.",
    },
    {
      title: "Regenerative Agriculture Consultation",
      description: "Advising on sustainable farming practices that promote soil health, biodiversity, and carbon sequestration.",
    },
  ];

  return (
    <div className='bg-gray-100'>
    <Navbar />
    <div className=" min-h-screen p-8 mt-10">

        <div className="">
          <h1 className="text-3xl font-semibold text-green-600 mb-4">Our Services</h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                <h2 className="text-lg font-semibold text-green-600 mb-2">{service.title}</h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </ul>
        </div>
 
    </div>
    <Footer />
    </div>
   
  );
};

export default Services;
