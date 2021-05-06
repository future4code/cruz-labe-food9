import React from 'react'
import { Center, Button, useToast } from '@chakra-ui/react'
import TextField from '@material-ui/core/TextField';
import { Form } from './styled'
import useForm from '../../hooks/useForm';
import { login } from './login';
import {useHistory} from 'react-router-dom'


const FormLogin = () => {
    const [form, onChange, clear] = useForm({email: '', password: ''})

    const toast = useToast()
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, toast, history)
    }
    

    return(
            <Form onSubmit={onSubmitForm}>
                <Center>
                    <TextField
                    autoFocus
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
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
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    type='password'
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
                    <Button 
                    type='submit' 
                    _hover={{ bg: "brand.100" }} 
                    mt='22px' w='328px' 
                    bg='brand.100'>Entrar</Button>
                </Center>
            </Form>
    )
}

export default FormLogin