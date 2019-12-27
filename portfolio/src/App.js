import React from 'react';
import About from './components/About.js'
import Header from './components/Header.js'
import Contact from './components/Contact.js'
import Portfolio from './components/Portfolio.js'
import SideProjects from './components/SideProjects.js'
import './css/header.css'

function App() {
  return (
    <div className="App">

        <Header />
        <About />
        <Portfolio />
        <SideProjects />
        <Contact />

    </div>
  );
}

export default App;
