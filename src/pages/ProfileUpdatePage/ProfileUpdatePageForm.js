import { Button, TextField } from '@material-ui/core'
import { Form } from './style'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const ProfileUpdatePageForm = () => {

    const history = useHistory();
    const [perfil, getPerfil] = useRequestData({}, `${BASE_URL}/profile`)

   
    const updatePerfil = async () => {
        try {
            const response = await axios.put(`${BASE_URL}/profile`, form, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            });
            localStorage.getItem("token", response.data.token);
            alert("Alterado com sucesso");
            history.push("/home")
        } catch (erro) {
            console.log("Erro", erro);
        }
    }

    const [form, handleInputChange, clear, setFormData] = useForm(perfil)

    const onsubmitForm = (e) => {
        e.preventDefault();
        updatePerfil();
    }


    useEffect(() => {
        setFormData(perfil.user)
    }, [perfil])


    return (
        <>
            <Form onSubmit={onsubmitForm}>
                <TextField
                    type={"text"}
                    label={"Nome"}
                    variant={'outlined'}
                    margin={'normal'}
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name={"name"}
                    value={form && form.name}
                    onChange={handleInputChange}
                />
                <TextField
                    type={"email"}
                    label={"Email"}
                    variant={'outlined'}
                    margin={'normal'}
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name={"email"}
                    value={form && form.email}
                    onChange={handleInputChange}
                />
                <TextField
                    type={"text"}
                    label={"CPF"}
                    variant={'outlined'}
                    margin={'normal'}
                    size="normal"
                    fullWidth
                    borderColor='green'
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name={"cpf"}
                    value={form && form.cpf}
                    onChange={handleInputChange}
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}>
                    Enviar
            </Button>
            </Form>

        </>
    )
}
export default ProfileUpdatePageForm;


