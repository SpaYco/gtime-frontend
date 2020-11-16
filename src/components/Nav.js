import { useState } from 'react';
import github from '../assets/github.png';
import logo from '../assets/logo.png';
import Menu from './Menu';

const Nav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav>
      <a href="https://github.com/Spayco/gtime-frontend" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
      <a href="/"><img src={logo} alt="logo" /></a>
      <button type="button" id="menu-bar" onClick={() => setMenu(menu === false)} style={{ transform: `rotate(${menu === false ? '0' : '90deg'})` }}>
        <i className="fas fa-bars" />
      </button>
      <div id="menu" style={{ right: menu === false ? '-250px' : '5px' }}>
        <Menu />
      </div>
    </nav>
  );
};

export default Nav;
