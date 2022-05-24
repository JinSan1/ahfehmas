import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import{ChakraProvider, ColorModeScript,useColorMode }from'@chakra-ui/react';

ReactDOM.render(
    <ChakraProvider>
    <ColorModeScript initialColorMode='Dark'/>
    <App />
    </ChakraProvider>, document.getElementById("root"))
