import React, { useState } from 'react'
import { Input } from '@chakra-ui/input'
import { Box, Heading, Center } from '@chakra-ui/layout'
import {useHistory} from "react-router-dom";
import {ButtonBack} from '../../pages/SignUpPage/styled'
import {goToProfilePage} from "../../routes/coordinator";
import { Button } from '@chakra-ui/button';
import { useToast } from '@chakra-ui/toast';
import useForm from '../../hooks/useForm';


const IndiqueUmAmigo = () => {

    const [form, onChange, clear] = useForm({email: ''})
    const toast = useToast()

    const onSubmitIndicar = (event) => {
        event.preventDefault()
        toast({
            title: `Parabéns!`,
            variant: "left-accent",
            status: "success",
            description: `E-mail indicado com sucesso!`,
            duration: 2000,
            position: "bottom-right",
            isClosable: true,
          });
          clear()
    }

    const history = useHistory()

    return(
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
                <Heading mt='100px' as="h4" size="md">Digite o e-mail do indicado(a)</Heading>
            </Center>
            <form onSubmit={onSubmitIndicar}>
                <Center>
                    <Input  
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    autoFocus 
                    type='email' 
                    borderColor='black' 
                    mr='15%' 
                    ml='15%' 
                    mt='20px' 
                    focusBorderColor="brand.100" />
                </Center>
                <Center>
                    <Button 
                    type='submit' 
                    mt='10px' 
                    color='white' 
                    _hover={{ bg: "green" }} 
                    bg='brand.100'>Enviar</Button>
                </Center>
            </form>
        </Box>
    )
}

export default IndiqueUmAmigo