import { Link } from 'react-router-dom';
import React from 'react';

export const About: React.FC = () => {
  return (
    <main>
      ABOUT
      <Link to="/">Click to view our home page</Link>
    </main>
  );
};

export default About;
