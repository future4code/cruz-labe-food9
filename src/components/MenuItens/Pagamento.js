import React from 'react'
import { Box, Center, Heading } from '@chakra-ui/layout'
import {ButtonBack} from '../../pages/SignUpPage/styled'
import {goToProfilePage} from "../../routes/coordinator";
import {useHistory} from "react-router-dom";
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { BsCreditCard } from 'react-icons/bs';
import { Button } from '@chakra-ui/button';
import { AddIcon } from '@chakra-ui/icons'


const Pagamento = () => {

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
            <Center mt='40px'>
                <Input focusBorderColor="brand.100" type='text' borderColor='brand.100' mr='15%' w='55%' variant="flushed" placeholder='Nome do titular no cartão'/>
                <Input focusBorderColor="brand.100" type='number' borderColor='brand.100' w='30%' variant="flushed" placeholder='válido até'/>
            </Center>
            <Center mt='40px'>
            <InputGroup mr='15%'>
                <Input focusBorderColor="brand.100" type='number' borderColor='brand.100' variant="flushed" placeholder='Número do cartão'/>
                <InputRightElement children={<BsCreditCard color="green" />} />
            </InputGroup>
                <Input focusBorderColor="brand.100" type='number' borderColor='brand.100' w='30%' variant="flushed" placeholder='cvv'/>
            </Center>
            <Center mt='40px'>
                <Input focusBorderColor="brand.100" type='number' borderColor='brand.100' variant="flushed" placeholder='CPF do títular do cartão'/>
            </Center>
            <Center>
                <Button _hover={{ bg: "green" }} bg='brand.100' mt='20px' leftIcon={<AddIcon />}>Add Cartão</Button>
            </Center>
        </Box>
    )
}

export default Pagamento