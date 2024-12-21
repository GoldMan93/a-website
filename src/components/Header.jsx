import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: '#282c34', padding: '1rem', color: 'white' }}>
      <h1>My Local Website</h1>
      <nav>
        <a href="#about" style={{ marginRight: '1rem', color: 'white' }}>About</a>
        <a href="#contact" style={{ color: 'white' }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
