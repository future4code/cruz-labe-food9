import { Button, TextField } from '@material-ui/core'
import { Form } from './style'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { goToHomePage } from '../../routes/coordinator'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const AdressPageForm = () => {
    useProtectedPage();

    const history = useHistory();
    const [adress,getAdress] = useRequestData({},`${BASE_URL}/profile/address`)
    
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
                    auth : localStorage.setItem("token")
                }
            });
            localStorage.getItem("token",response.data.token);
            history.push("/home")
        }catch(erro){
            console.log("Erro",erro);
        }
    }

  

    const [form,handleInputChange,clear,setFormData] = useForm(adress)

    const onsubmitForm = (e) => {
        e.preventDefault();
        updateAdress();
    }

    
    useEffect(()=>{
        setFormData(adress.address)
    },[adress])


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
                value={form && form.street}
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
                value={form && form.number}
                onChange={handleInputChange}
            />
            <TextField
                type={"text"}
                label={"Complemento"}
                variant={'outlined'}
                margin={'normal'}
                fullWidth
                name={"complement"}
                value={form && form.complement}
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
                value={form && form.neighbourhood}
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
                value={form && form.city}
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