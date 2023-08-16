import React, { useState } from 'react';

import Nav from './components/Nav';
import Hero from './components/Hero';

function Base() {
  const [theme, setTheme] = useState('cmyk');

  const handleThemeChange = () => {
    const newTheme = theme === 'cmyk' ? 'dracula' : 'cmyk';
    setTheme(newTheme);
  };

  return (
    <div data-theme={theme}>
      <div className='min-h-screen flex flex-col w-full'>
        <div className='p-10 text-end sticky top-0 z-30'><input type="checkbox" class="toggle" onClick={handleThemeChange} /></div>
        <Nav />
        <Hero />
      </div>
    </div>
  );
};

export default Base;
