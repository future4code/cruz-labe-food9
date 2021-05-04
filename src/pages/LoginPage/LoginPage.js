import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import useForm from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { goToSignUpPage } from "../../routes/coordinator";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch',
        },
        '& > *': {
            margin: theme.spacing(1),
        }
    }
}))

const LoginPage = () => {
    const [formData, handleInputChange] = useForm({ email: "", password: "" })

    const history = useHistory()
    const classes = useStyles();

    const onSubmit = (event) => {
        event.preventDefault();
        login();
    }

    const login = () => {
        axios
            .post(`${BASE_URL}/login`, formData)
            .then(response => {
                window.localStorage.setItem("token", response.data.token)
                    if (response.data.user.hasAddress) {
                        history.push("/home")
                    } else {
                        history.push("/adress")
                }
            })
            .catch(error => {
                console.log(error)
                alert("Tem alguma coisa errada meu chapa")
            })
    }

    return (
        <div>
            <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
                <TextField
                    required
                    type="email"
                    id="email-input"
                    label="E-mail"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    type="password"
                    id="password-input"
                    label="Password"
                    variant="outlined"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <Button type={"submit"} variant="contained"> Login </Button>
            </form>
            <div>
                <Button onClick={() => { goToSignUpPage(history) }} variant="contained"> Cadastrar </Button>
            </div>
        </div>
    )
}

export default LoginPage