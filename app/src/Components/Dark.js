import React from 'react';
import{VStack, IconButton, useColorMode }from'@chakra-ui/react';
import {FaSun, FaMoon} from 'react-icons/fa';





export default function Dark() {
    const { colorMode, toggleColorMode }= useColorMode();
    return (
        <VStack p={2}>
            <IconButton onClick={toggleColorMode} icon={ colorMode ==='light' ? <FaSun /> : <FaMoon />} isRound='true' size='lg' alignself='flex-end'/>
        </VStack>
    )
}

