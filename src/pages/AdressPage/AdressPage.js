import { Box } from '@chakra-ui/layout';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import AdressPageForm from './AdressPageForm';


const AdressPage = () =>{
    useProtectedPage();
    return(
        <Box border='1px solid' borderColor='#C4C4C4' minW="360px" minH="640px">
            <h1>Meu endereço</h1>
            <AdressPageForm/>
        </Box>
    )
}
export default AdressPage