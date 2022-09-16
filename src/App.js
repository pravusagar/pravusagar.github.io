import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Data from './Database';
import './App.css'
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs.jsx';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">

      <Header Data={Data}/>
      <About Data={Data}/>
      <Resume Data={Data}/>
      <Portfolio Data={Data}/>
      <ContactUs Data={Data}/>
      <Footer Data={Data}/>

    </div>
  )
}

export default App
