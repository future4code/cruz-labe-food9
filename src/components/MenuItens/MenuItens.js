import React from 'react'
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon,
    QuestionOutlineIcon,
    RepeatIcon, 
    } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Link
    } from "@chakra-ui/react"
import { CgLogOut } from 'react-icons/cg'
import { GiThreeFriends } from 'react-icons/gi'
import { IoTicketSharp } from 'react-icons/io5'
import { ImSpoonKnife } from 'react-icons/im'
import { IoWalletOutline } from 'react-icons/io5'
import { RiStarSmileLine } from "react-icons/ri"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
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
                        <MenuGroup title='Siga-nos nas redes sociais!'>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            ml='8%' mr='15%' colorScheme="facebook" icon={<FaFacebook />}
                        />
                        <MenuList>
                            <MenuItem _hover={{bg:'brand.100'}} as={Link} href='https://www.facebook.com/matheus.borges.75457081' icon={<FaFacebook />} command="⌘">
                            Matheus Borges
                            </MenuItem>
                            <MenuItem _hover={{bg:'brand.100'}} as={Link} href='https://www.facebook.com/gabriel.mina1/' icon={<FaFacebook />} command="⌘">
                            Gabriel Mina
                            </MenuItem>
                            <MenuItem _hover={{bg:'brand.100'}} icon={<FaFacebook />} command="⌘">
                            New Tab
                            </MenuItem>
                            <MenuItem _hover={{bg:'brand.100'}} icon={<FaFacebook />} command="⌘">
                            New Tab
                            </MenuItem>
                        </MenuList>
                        </Menu>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            mr='15%' colorScheme="telegram" icon={<FaLinkedin />}
                        />
                        <MenuList>
                            <MenuItem _hover={{bg:'brand.100'}} as={Link} href='https://www.linkedin.com/in/matheus-borges-94a6571bb/' icon={<FaLinkedin />} command="⌘">
                            Matheus Borges
                            </MenuItem>
                            <MenuItem _hover={{bg:'brand.100'}} as={Link} href='https://www.linkedin.com/in/gabriel-mina-115511153/' icon={<FaLinkedin />} command="⌘">
                            Gabriel Mina
                            </MenuItem>
                            <MenuItem _hover={{bg:'brand.100'}} icon={<FaLinkedin />} command="⌘">
                            New Tab
                            </MenuItem>
                            <MenuItem _hover={{bg:'brand.100'}} icon={<FaLinkedin />} command="⌘">
                            New Tab
                            </MenuItem>
                        </MenuList>
                        </Menu>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            bg='radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)' 
                            icon={<FaInstagram color='white' />} 
                            _hover={{bg:'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)'}}
                            _active={{bg:'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)'}}
                        />
                        <MenuList>
                        <MenuItem _hover={{bg:'brand.100'}} as={Link} href="https://www.instagram.com/theush7x5/" icon={<FaInstagram />} command="⌘">
                            TheusH7X5
                            </MenuItem>
                            <MenuItem _hover={{bg:'brand.100'}} as={Link} href='https://www.instagram.com/_gabrielmina/' icon={<FaInstagram />} command="⌘">
                            _gabrielmina
                            </MenuItem>
                            <MenuItem _hover={{bg:'brand.100'}} icon={<FaInstagram />} command="⌘">
                            New Tab
                            </MenuItem>
                            <MenuItem _hover={{bg:'brand.100'}} icon={<FaInstagram />} command="⌘">
                            New Tab
                            </MenuItem>
                        </MenuList>
                        </Menu>
                        </MenuGroup>
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