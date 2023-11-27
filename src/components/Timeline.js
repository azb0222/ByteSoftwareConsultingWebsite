import React from 'react';

// Greeting component
const Timeline = ({ name }) => {
    return (
        <div>
           <ul className="steps">
  <li className="step step-primary">Register</li>
  <li className="step step-primary">Choose plan</li>
  <li className="step">Purchase</li>
</ul>
        </div>
    );
};

export default Timeline;
