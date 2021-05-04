import React from 'react'
import { Center, Button, useToast } from '@chakra-ui/react'
import TextField from '@material-ui/core/TextField';
import { Form } from './styled'
import useForm from '../../hooks/useForm';
import { signUp } from './signUp';
import {useHistory} from 'react-router-dom'


const FormSignUp = () => {
    const [form, onChange, clear] = useForm({name: '', email: '', cpf: '', password: '', confirmPassword: ''})

    const toast = useToast()
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, toast, history)
    }
    


    return(
            <Form onSubmit={onSubmitForm}>
                <Center>
                    <TextField
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
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
                    name={'email'}
                    value={form.email}
                    onChange={onChange}                   
                    label="E-mail"
                    placeholder="email@email.com"
                    margin="normal"
                    variant="outlined"
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    
                    />                
                </Center>
                <Center>
                    <TextField
                    name={'cpf'}
                    value={form.cpf}
                    onChange={onChange}
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
                    <TextField
                    name={'confirmPassword'}
                    value={form.confirmPassword}
                    onChange={onChange}
                    type='password'
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
                    <Button type='submit' _hover={{ bg: "brand.100" }} mt='12px' w='328px' bg='brand.100'>Criar</Button>
                </Center>
            </Form>
    )
}

export default FormSignUp