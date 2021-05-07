import React from 'react'
import { Box, Center, Heading } from '@chakra-ui/layout'
import {ButtonBack} from '../../pages/SignUpPage/styled'
import {goToProfilePage} from "../../routes/coordinator";
import {useHistory} from "react-router-dom";
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import OrderHistory from '../OrderHistory/OrderHistory';
import { HistoricoPerfil, Path } from '../../pages/ProfilePage/styled';



const Pedidos = () => {
    const [profile, getProfile] = useRequestData({}, `${BASE_URL}/profile`);

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
                <Heading mt='100px' as="h4" size="md">Seus Pedidos</Heading>
            </Center>
            <Path/>
            <HistoricoPerfil>
                <OrderHistory/>
            </HistoricoPerfil>
        </Box>
    )
}

export default Pedidos