import { Button, TextField } from '@material-ui/core'
import { Form } from './style'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useToast } from '@chakra-ui/toast';


const AdressPageForm = () => {
    const toast = useToast()

    const history = useHistory();
    const [adress, getAdress] = useRequestData({}, `${BASE_URL}/profile/address`)

   
    const updateAdress = async () => {
        try {
            const response = await axios.put(`${BASE_URL}/address`, form, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            });
            localStorage.getItem("token", response.data.token);
            toast({
                title: `Alterado com sucesso!`,
                variant: "left-accent",
                status: "success",
                duration: 2000,
                position: "bottom-right",
                isClosable: true,
              });
            history.push("/home")
        } catch (err) {
            toast({
                title: `Erro ao alterar!`,
                description: `${err.response.data.message}!`,
                duration: 1000,
                status: "error",
                variant: "left-accent",
                position: "bottom-left",
                isClosable: true,
            });
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


