import React, { useState } from 'react';
import { teamMembers } from '../../constants';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function About() {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full overflow-hidden">
      <Navbar />
      <div className="w-full h-full min-h-screen sm:justify-center sm:pt-0 px-5 py-5">
      <div className="w-full h-full p-6 m-auto bg-white rounded-3xl drop-shadow-3xl mt-[100px] mb-[300px]">
        <div className="text-[36px] font-poppins font-semibold text-black mb-10 ml-5 mt-6 text-center">
            <h1>About Us</h1>
        </div>
                          
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setActiveMember(index)}
              onMouseLeave={() => setActiveMember(null)}
            >
              <img
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="rounded-lg"
              />
              {activeMember === index && (
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 text-white p-4 hover:transition ease-linear hover:animate-pulse cursor-pointer">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm font-medium">{member.role}</p>
                  <p className="text-sm transition-all">{member.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
