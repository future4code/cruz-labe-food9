import { useProtectedPage } from '../../hooks/useProtectedPage';
import AdressPageForm from './AdressPageForm';
import {Container} from './style'

const AdressPage = () =>{
    useProtectedPage();
    return(
        <Container>
            <h1>Meu endereço</h1>
            <AdressPageForm/>
        </Container>
    )
}
export default AdressPage