import React, { useState } from 'react';
import './Registration/herost.css';
import Menu from './Registration/Menu';
import Main from './Registration/Main';

function Hero() {
  const [active, setActive] = useState(false);


  return (
    <div>
      <button className='btnActive' onClick={() => setActive(!active)}>{active ? 'Скрыть' : 'Меню'}</button>

      {active && <App />}
    </div>
  )
};

function App() {
  return (
    <div>
      <Menu />
      <Main />
    </div>
  )
};

export default Hero





