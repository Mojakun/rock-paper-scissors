import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import About from '@pages/About'
import Home from '@pages/Home';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Router;
