import { Box } from '@chakra-ui/layout';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import AdressPageLoginForm from './AdressPageLoginForm';


const AdressPageLogin = () =>{
    useProtectedPage();
    return(
        <Box border='1px solid' borderColor='#C4C4C4' minW="360px" minH="640px">
            <h1>Meu endereço</h1>
            <AdressPageLoginForm/>
        </Box>
    )
}
export default AdressPageLogin