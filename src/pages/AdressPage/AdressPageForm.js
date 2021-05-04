import { Button, TextField } from '@material-ui/core'
import { Form } from './style'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const AdressPageForm = () => {

    const history = useHistory();
    const [adress, getAdress] = useRequestData({}, `${BASE_URL}/profile/address`)

    const initiaState = {
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
    }


    const updateAdress = async () => {
        try {
            const response = await axios.put(`${BASE_URL}/address`, form, {
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



    const [form, handleInputChange, clear, setFormData] = useForm(adress)

    const onsubmitForm = (e) => {
        e.preventDefault();
        updateAdress();
    }


    useEffect(() => {
        setFormData(adress.address)
    }, [adress])


    return (
        <>
            <Form onSubmit={onsubmitForm}>
                <TextField
                    type={"text"}
                    label={"Logadouro"}
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
                    name={"street"}
                    value={form && form.street}
                    onChange={handleInputChange}
                />
                <TextField
                    type={"text"}
                    label={"Numero"}
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
                    name={"number"}
                    value={form && form.number}
                    onChange={handleInputChange}
                />
                <TextField
                    type={"text"}
                    label={"Complemento"}
                    variant={'outlined'}
                    margin={'normal'}
                    size="normal"

                    fullWidth
                    borderColor='green'
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name={"complement"}
                    value={form && form.complement}
                    onChange={handleInputChange}
                />
                <TextField
                    type={"text"}
                    label={"Bairro"}
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
                    name={"neighbourhood"}
                    value={form && form.neighbourhood}
                    onChange={handleInputChange}
                />
                <TextField
                    type={"text"}
                    label={"Cidade"}
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
                    name={"city"}
                    value={form && form.city}
                    onChange={handleInputChange}
                />
                <TextField
                    type={"text"}
                    label={"Estado"}
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
                    name={"state"}
                    value={form && form.state}
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
export default AdressPageForm;