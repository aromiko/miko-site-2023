import { About, Home } from 'pages';
import { Footer, Header } from 'components';
import { Route, Routes } from 'react-router-dom';

import React from 'react';

export const PageRouter: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default PageRouter;
