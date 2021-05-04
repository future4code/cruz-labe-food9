import React from 'react'
import { Center, Button } from '@chakra-ui/react'
import TextField from '@material-ui/core/TextField';
import { Form } from './styled'
import {PhoneIcon} from '@chakra-ui/react'


const FormSign = () => {


    return(
            <Form >
                <Center>
                    <TextField
                    autoFocus
                    required
                    fullWidth
                    label="Nome"
                    style={{ margin: 8 }}
                    placeholder="Nome e sobrenome"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    />                
                </Center>
                <Center>
                    <TextField
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    label="E-mail"
                    style={{ margin: 8 }}
                    placeholder="email@email.com"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    />                
                </Center>
                <Center>
                    <TextField
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    label="CPF"
                    style={{ margin: 8 }}
                    placeholder="000.000.000-00"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    />                
                </Center>
                <Center>
                    <TextField
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    label="Senha"
                    style={{ margin: 8 }}
                    placeholder="Mínimo 6 caracteres"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    />                
                </Center>
                <Center>
                    <TextField
                    icon={<PhoneIcon color="gray.300" />}
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    label="Confirmar"
                    style={{ margin: 8 }}
                    placeholder="Confirme a senha anterior"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    />                
                </Center>
                <Center>
                    <Button _hover={{ bg: "brand.100" }} mt='12px' w='328px' bg='brand.100'>Criar</Button>
                </Center>
            </Form>
    )
}

export default FormSign