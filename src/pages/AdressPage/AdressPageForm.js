import { Button, TextField } from '@material-ui/core'
import { Form } from './style'

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

        }catch(erro){
            
        }
    }

    // const [form,handleInputChange,clear] = useForm(initiaState)

    const onsubmitForm = (e) => {
        e.preventDefault();
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
            />
            <TextField
                type={"text"}
                label={"Numero"}
                variant={'outlined'}
                margin={'normal'}
                fullWidth
                required
                name={"number"}
            />
            <TextField
                type={"text"}
                label={"Complemento"}
                variant={'outlined'}
                margin={'normal'}
                fullWidth
                required
                name={"complement"}
            />
            <TextField
                type={"text"}
                label={"Bairro"}
                variant={'outlined'}
                margin={'normal'}
                fullWidth
                required
                name={"neighbourhood"}
            />
            <TextField
                type={"text"}
                label={"Cidade"}
                variant={'outlined'}
                margin={'normal'}
                fullWidth
                required
                name={"city"}
            />
            <TextField
                type={"text"}
                label={"Estado"}
                variant={'outlined'}
                margin={'normal'}
                fullWidth
                required
                name={"state"}
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