import React from 'react';
import {useState} from 'react';
import { teamMembers } from '../../constants'

function About() {
  const [activeMember, setActiveMember] = useState("");

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => setActiveMember(index)}
          onMouseLeave={() => setActiveMember(null)}
        >
          <Image
            src={member.image}
            alt={member.name}
            width={400}
            height={400}
            className="rounded-lg"
          />
          {activeMember === index && (
            <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 text-white p-4">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm font-medium">{member.role}</p>
              <p className="text-sm">{member.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default About;