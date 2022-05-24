import React from 'react';
import Info from './Components/Info';
import About from './Components/About';
import Interest from './Components/Interest';
import Footer from './Components/Footer';
import Dark from './Components/Dark';
import{ Heading, useColorMode } from'@chakra-ui/react';



export default function App() {
    return (
        <div>
            <Dark />
        <div className="body">
        <Info />
        <About />
        <Interest />
        <Footer />
        </div>
        </div>
    )
}