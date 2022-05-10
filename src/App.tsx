import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Topbar from './components/navbar/topbar';
import Features from './components/sections/features';
import Home from './components/sections/home';
import Roadmap from './components/sections/roadmap';
import Stuff from './components/sections/stuff';
import { AppStyle } from './components/styles/appStyle';

const App : React.FC = () => {
  return (
    <>
      <AppStyle>
        <Topbar />
        <Home />
        <Stuff />
        <Features />
        <Roadmap />
        <Footer />
      </AppStyle>
    </>
  );
}

export default App;
