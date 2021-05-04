import { Button, TextField } from '@material-ui/core'
import { Form } from './style'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
const AdressPageForm = () => {

    const initiaState = {
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""

    }

    const updateAdress = async() =>{
        try{
            const response = await axios.put(`${BASE_URL}/address`,form,{
                headers:{
                    auth :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlhhZlhFVXY5Rmk0SEJycDcyeHVxIiwibmFtZSI6IkdhYnJpZWwgTWluYSBTaWx2YSIsImVtYWlsIjoiZ2FicmllbE1pbmFAZnV0dXJlNC5jb20iLCJjcGYiOiI2OTYuMjQzLjAwNC05MSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBkYXMgYWNlcm9sYXMsIDkyLCBDb25kb21pbmlvIFRlcnJhIHNhbnRhIC0gQmFpcnJvIGRvIGdyYW1hIiwiaWF0IjoxNjIwMTM2NjcxfQ.uSVfJbbWiPizZuBtbjIkrGfF5eNfZPlSzQh4ylRee0Q"
                }
            });
            // localStorage.setItem("token",response.data.token);
            console.log("token",response.data.token);
            console.log("usuario",response.data.user);
        }catch(erro){
            console.log("Erro",erro);
        }
    }

    const [form,handleInputChange] = useForm(initiaState)

    const onsubmitForm = (e) => {
        e.preventDefault();
        updateAdress();
    }

    return (
        <Form onSubmit={onsubmitForm}>
            <TextField
                type={"text"}
                label={"Logadouro"}
                variant={'outlined'}
                margin={'normal'}
                fullWidth
                required
                name={"street"}
                value={form.street}
                onChange={handleInputChange}
            />
            <TextField
                type={"text"}
                label={"Numero"}
                variant={'outlined'}
                margin={'normal'}
                fullWidth
                required
                name={"number"}
                value={form.number}
                onChange={handleInputChange}
            />
            <TextField
                type={"text"}
                label={"Complemento"}
                variant={'outlined'}
                margin={'normal'}
                fullWidth
                name={"complement"}
                value={form.complement}
                onChange={handleInputChange}
            />
            <TextField
                type={"text"}
                label={"Bairro"}
                variant={'outlined'}
                margin={'normal'}
                fullWidth
                required
                name={"neighbourhood"}
                value={form.neighbourhood}
                onChange={handleInputChange}
            />
            <TextField
                type={"text"}
                label={"Cidade"}
                variant={'outlined'}
                margin={'normal'}
                fullWidth
                required
                name={"city"}
                value={form.city}
                onChange={handleInputChange}
            />
            <TextField
                type={"text"}
                label={"Estado"}
                variant={'outlined'}
                margin={'normal'}
                fullWidth
                required
                name={"state"}
                value={form.state}
                onChange={handleInputChange}
            />
            <Button
                type={"submit"}
                fullWidth
                variant={"contained"}
                color={"primary"}
            >Enviar</Button>
        </Form>
    )
}
export default AdressPageForm;