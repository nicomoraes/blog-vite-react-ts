import React from 'react';

import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import Header from '@components/Header';

import Home from '@pages/Home';
import Post from '@pages/Post';
import Explorer from '@pages/Explorer';
import ScrollToTop from '@components/layout/ScrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/explorer/' element={<Explorer />} />
        <Route path='/explorer/:categoryName' element={<Explorer />} />
        <Route path='/posts/:slug' element={<Post />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
