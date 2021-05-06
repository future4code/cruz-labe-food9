import { Box } from '@chakra-ui/layout';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import ProfileUpdatePageForm from './ProfileUpdatePageForm'
import {Container} from './style'

const ProfileUpdatePage = () =>{
    useProtectedPage();
    return(
        <Box border='1px solid' borderColor='#C4C4C4' w="360px" h="640px">
            <h1>Editar</h1>
            <ProfileUpdatePageForm/>
        </Box>
    )
}
export default ProfileUpdatePage