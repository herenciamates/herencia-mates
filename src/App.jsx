import React, { useState } from 'react';
import Nav from './component/layout/nav';
import Proposito from './component/proposito/proposito';
import Productos from './component/productos/productos';
import Footer from './component/footer/footer';
function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <Nav 
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    />
    <Proposito
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    />
    <Productos 
      isMenuOpen={isMenuOpen} 
      setIsMenuOpen={setIsMenuOpen}
    />
    <Footer
      isMenuOpen={isMenuOpen} 
      setIsMenuOpen={setIsMenuOpen} />
    </>
    
  );
}

export default App;
