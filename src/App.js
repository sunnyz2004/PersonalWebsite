import React from 'react';
import "./App.css";
import Header from './components/header/header.jsx'
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Timeline from './components/timeline/timeline';
import Work from './components/work/work';
import Testimonial from './components/testimonial/testimonial';
import Footer from './components/footer/footer';

const App = () => {
    return (
        <>

        <Header />

        <main className= 'main'>
          <Home />
          <About />
          <Skills />
          <Timeline />
          <Work />
          <Testimonial />
          <Footer />
          
        </main>
        </>
    )
}

export default App