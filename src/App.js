import './App.scss';
import { useState } from 'react';
import Topbar from './components/Topbar/Topbar';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Work from './components/Work/Work';
import Testrimonial from './components/Testrimonial/Testrimonial'
import Contact from './components/Contact/Contact';
import Manu from './components/manu/Manu';

function App() {
  const [manuOpen, setManuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar manuOpen = {manuOpen} setManuOpen = {setManuOpen} />
      <Manu manuOpen = {manuOpen} setManuOpen = {setManuOpen} />
      <div className='section'>
        <Intro />
        <Portfolio />
        <Work />
        <Testrimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
