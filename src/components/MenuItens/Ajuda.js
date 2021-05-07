import React from 'react'
import { Box, Center, Heading } from '@chakra-ui/layout'
import {ButtonBack} from '../../pages/SignUpPage/styled'
import {goToProfilePage} from "../../routes/coordinator";
import {useHistory} from "react-router-dom";
import { Image } from '@chakra-ui/image';
import ajuda from '../../assets/images/help.gif'



const Ajuda = () => {

    const history = useHistory()

    return (
        <Box border='1px solid' borderColor='#C4C4C4' minW="360px" minH="640px">
            <Box h='20px'>
            </Box>
            <Box borderBottomColor='black'>
                <ButtonBack onClick={ () => goToProfilePage(history)}/>
            </Box>
            <hr/>
            <Center>
                <Heading mt='20px' as="h4" size="md">FutureEats</Heading>
            </Center>
            <Center>
                <Image w='90%' mt='60px' src={ajuda}/>
            </Center>
        </Box>
    )
}

export default Ajuda