import { useProtectedPage } from '../../hooks/useProtectedPage';
import ProfileUpdatePageForm from './ProfileUpdatePageForm'
import {Container} from './style'

const ProfileUpdatePage = () =>{
    useProtectedPage();
    return(
        <Container>
            <h1>Editar</h1>
            <ProfileUpdatePageForm/>
        </Container>
    )
}
export default ProfileUpdatePage