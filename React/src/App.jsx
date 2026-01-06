import React from 'react'
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <WhatsAppButton phoneNumber="+919876543210" />
    </>
  )
}

export default App
