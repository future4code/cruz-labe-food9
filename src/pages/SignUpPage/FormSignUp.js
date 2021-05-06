import React, { useState } from 'react'
import { Center, Button, useToast } from '@chakra-ui/react'
import TextField from '@material-ui/core/TextField';
import { Form } from './styled'
import useForm from '../../hooks/useForm';
import { signUp } from './signUp';
import {useHistory} from 'react-router-dom'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';


const FormSignUp = () => {
    const [form, onChange, clear] = useForm({name: '', email: '', cpf: '', password: ''})
    const [confirm, setConfirm] = useState('')
    const [values, setValues] = useState({
      showPassword: false,

    });
    const [valuesConfirm, setValuesConfirm] = useState({
        showPasswordConfirm: false
        });
  
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleClickShowPasswordConfirm = () => {
        setValuesConfirm({ ...valuesConfirm, showPasswordConfirm: !valuesConfirm.showPasswordConfirm });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const handleMouseDownPasswordConfirm = (event) => {
      event.preventDefault();
    };
    
    const toast = useToast()
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, toast, history, confirm, setConfirm)
    }
    
    const handleConfirm = (e) => {
        setConfirm(e.target.value)
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
                    required
                    name={'email'}
                    value={form.email}
                    onChange={onChange}                   
                    label="E-mail"
                    placeholder="email@email.com"
                    margin="normal"
                    variant="outlined"
                    size="normal"
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
                    <FormControl variant="outlined">
                        <InputLabel
                        required
                        htmlFor="outlined-adornment-password">Senha</InputLabel>
                            <OutlinedInput
                            name={'password'}
                            value={form.password}
                            onChange={onChange}
                            style={{ margin: 1, width:325, label:"CPF"
                        }}
                            borderColor='green'
                            size="normal"
                            type={values.showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                        </InputAdornment>
                            }
                            labelWidth={50}
                        />
                        </FormControl>
                </Center>
                <Center>
                    <FormControl variant="outlined">
                        <InputLabel
                        required
                        style={{marginTop:10}}
                        htmlFor="outlined-adornment-password">Confirmar</InputLabel>
                            <OutlinedInput
                            name={'confirm'}
                            value={form.confirm}
                            onChange={handleConfirm}
                            style={{ marginTop: 10, width:325 }}
                            required
                            borderColor='green'
                            size="normal"
                            type={valuesConfirm.showPasswordConfirm ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPasswordConfirm}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {valuesConfirm.showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                        </InputAdornment>
                            }
                            labelWidth={80}
                        />
                        </FormControl>
                </Center>
                <Center>
                    <Button type='submit' _hover={{ bg: "brand.100" }} mt='12px' w='328px' bg='brand.100'>Criar</Button>
                </Center>
            </Form>
    )
}

export default FormSignUp