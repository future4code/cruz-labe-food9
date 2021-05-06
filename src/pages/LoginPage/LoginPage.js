import React from "react"
import FormLogin from "./FormLogin"
import {Box, VStack, Text, Center} from "@chakra-ui/react"
import {Image} from "@chakra-ui/react"
import logo_future_eat from "../../assets/images/logo_future_eat.png"
import {useHistory} from 'react-router-dom'
import {goToSignUpPage} from "../../routes/coordinator";

const LoginPage = () => {
    const history = useHistory()

    return (
        <Box border='1px solid' borderColor='#C4C4C4' w="360px" h="640px">
            <VStack>
                <Box>
                    <Image mb='16px' mt='88px' src={logo_future_eat} w='104px' h='58px'/>
                </Box>
                <Text mt='10px' p='8px' fontSize='16px'><b>Entrar</b></Text>
                <FormLogin/>
                <Center>
                    <Text
                        mt='15px'
                        cursor='pointer'
                        onClick={() => goToSignUpPage(history)}><b>Não possui cadastro? Clique aqui.</b></Text>
                </Center>
            </VStack>

        </Box>
    );
};

export default LoginPage
