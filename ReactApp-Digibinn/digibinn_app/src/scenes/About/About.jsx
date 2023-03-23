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
        
          
        </div>
      ))}
    </div>
  );
};

export default About;