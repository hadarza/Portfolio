import React,{useEffect} from 'react'
import {About,Footer,Header,Skills,Testmonial,Work} from './container'
import {NavBar} from './Components'
import './scss/Application.scss'
import WebFont from 'webfontloader';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Noto Sans Hebrew', 'sans-serif']
      }
    });
   }, []);

  return (
    <div className="app">
      <NavBar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testmonial/>
      <Footer/>
    </div>
  );
}

export default App;
