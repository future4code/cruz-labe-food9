import React from 'react'
import { HamburgerIcon,
    QuestionOutlineIcon, 
    } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider
    } from "@chakra-ui/react"
import { CgLogOut } from 'react-icons/cg'
import { GiThreeFriends } from 'react-icons/gi'
import { IoTicketSharp } from 'react-icons/io5'
import { ImSpoonKnife } from 'react-icons/im'
import { IoWalletOutline } from 'react-icons/io5'
import { RiStarSmileLine } from "react-icons/ri"
import { useHistory } from "react-router-dom"
import { useToast } from "@chakra-ui/react"
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon} from 'react-icons/fa'
import { goToLoginPage, goToIndiqueUmAmigoPage, goToCuponsPage, goToPedidosPage, goToPagamentoPage, goToAjudaPage, goToAvaliacoesPage } from '../../routes/coordinator'




const MenuItens = () => {

    const {colorMode, toggleColorMode } = useColorMode()


    const token = localStorage.getItem('token')

    const toast = useToast()

    const logout = () => {
        localStorage.removeItem('token')
        {toast({
            title: `Saída feita com sucesso!`,
            variant: 'solid',
            status: 'success',
            description: ``,
            duration: 2000,
            position:"bottom-left",
            isClosable: true,
        })}
        goToLoginPage(history)
    }
    const history = useHistory()


    return(
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    isRound
                    icon={<HamburgerIcon w={7} h={7} color='brand.100' />}
                    variant='ghost'
                    lineHeight="1.2"
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    _hover={{ bg: "brand.300" }} 
                    _active={{
                        bg: "brand.400",
                        transform: "scale(0.98)",
                    }}
                />
                    <MenuList>
                        <MenuGroup title="Configuração">
                            <MenuItem  _hover={{ bg: "brand.100" }} 
                            onClick={() => goToIndiqueUmAmigoPage(history)} 
                            icon={<GiThreeFriends color='green'/>} command="⌘">
                                Indique um amigo
                            </MenuItem>
                            <MenuItem 
                            _hover={{ bg: "brand.100" }} 
                            onClick={() => goToCuponsPage(history)}
                            icon={<IoTicketSharp color='green'/>} command="⌘">
                                Cupons
                            </MenuItem>
                            <MenuItem 
                            _hover={{ bg: "brand.100" }} 
                            onClick={() => goToPedidosPage(history)}
                            icon={<ImSpoonKnife color='green'/>} command="⌘">
                                Pedidos
                            </MenuItem>
                            <MenuItem 
                            _hover={{ bg: "brand.100" }} 
                            onClick={() => goToPagamentoPage(history)}
                            icon={<IoWalletOutline color='green'/>} command="⌘">
                                Pagamento
                            </MenuItem>
                            </MenuGroup>
                                <MenuItem 
                                _hover={{ bg: "brand.100" }} 
                                onClick={toggleColorMode} 
                                icon={colorMode ==='light' ? <FaSun color='green'/> : <FaMoon color='green'/>} command="⌘">
                                    Exibição
                                </MenuItem>
                                <MenuItem 
                                _hover={{ bg: "brand.100" }} 
                                onClick={() => goToAjudaPage(history)}
                                icon={<QuestionOutlineIcon color='green'/>} command="⌘">
                                    Ajuda
                                </MenuItem>
                                <MenuItem 
                                _hover={{ bg: "brand.100" }} 
                                onClick={() => goToAvaliacoesPage(history)}
                                icon={<RiStarSmileLine color='green'/>} command="⌘">
                                    Avaliações
                                </MenuItem>
                            <MenuDivider />
                                <MenuItem 
                                onClick={logout} 
                                _hover={{ bg: "brand.100" }} 
                                icon={<CgLogOut color='green'/>} command="⌘">
                                    Sair
                                </MenuItem>
                    </MenuList>
            </Menu>
    )
}

export default MenuItens