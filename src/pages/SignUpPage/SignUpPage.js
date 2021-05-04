import React from "react"
import FormSignUp from "./FormSignUp"
import { Box, VStack, Text } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import logo_future_eat from "../../assets/images/logo_future_eat.png"
import {ButtonBack} from './styled'


const SignUpPage = () => {

  return (
      <Box border='1px solid' borderColor='#C4C4C4' w="360px" h="640px">
          <Box h='20px'>
          </Box>
        <Box borderBottomColor='black'>
            <ButtonBack/>
        </Box>
        <hr/>
        <VStack>
        <Box>
            <Image mt='24px' src={logo_future_eat} w='104px' h='58px' />
        </Box>
        <Text p='8px' fontSize='16px' >Cadastrar</Text>
        <FormSignUp />
        </VStack>
      
      </Box>
  );
};

export default SignUpPage;
