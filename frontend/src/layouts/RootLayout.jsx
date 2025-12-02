import React, {useState} from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';


const RootLayout = () => {
  const [activeOption, setActiveOption] = useState('home');
  return (
    <>
        <Header />
        <main>
            <Outlet context={{activeOption, setActiveOption}} />
        </main>

        <Footer />
    
    </>

  )
}

export default RootLayout