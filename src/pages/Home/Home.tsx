import { Link } from 'react-router-dom';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <main>
      HOME
      <Link to="/about">Click to view our about page</Link>
    </main>
  );
};

export default Home;
