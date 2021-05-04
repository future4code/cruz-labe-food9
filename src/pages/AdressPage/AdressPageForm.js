import { Button, TextField } from '@material-ui/core'
import { Form } from './style'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'

const AdressPageForm = () => {

    const getAdress = useRequestData({},`${BASE_URL}/profile/address`);


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
                    auth :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5DM1lKZk1DY2Rsc0NFTWF6dmZXIiwibmFtZSI6IkVkaW1hciBzYW50b3MiLCJlbWFpbCI6ImVkaW5ob0BmdXR1cmU0LmNvbSIsImNwZiI6IjY5Ni45OTMuMjM0LTkxIiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTYyMDE0NDExOX0.rqkfGVo7Hya9ssPLcQNBuqCY6exJcDWyACl_PS7_iVk"
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
        <>
        <Form onSubmit={onsubmitForm}>
            <TextField
                type={"text"}
                label={"Logadouro"}
                variant={'outlined'}
                margin={'normal'}
                fullWidth
                required
                name={"street"}
                // value={(getAdress.address ? getAdress.address.street: form.street)}
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
                // value={(getAdress.address ? getAdress.address.number: form.number)}
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
                // value={(getAdress.address ? getAdress.address.complement: form.complement)}
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
                // value={(getAdress.address ? getAdress.address.neighbourhood: form.neighbourhood)}
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
                // value={(getAdress.address ? getAdress.address.city: form.city)}
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
                // value={(getAdress.address ? getAdress.address.state: form.state)}
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
        
        {getAdress && getAdress.address && getAdress.address.street}
        </>
    )
}
export default AdressPageForm;