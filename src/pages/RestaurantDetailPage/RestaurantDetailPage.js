import {Text} from '@chakra-ui/layout';
import React from 'react';
import {TextContainerHeader} from './styled';
import {useProtectedPage} from "../../hooks/useProtectedPage";
import {useParams} from "react-router-dom"
import useRequestData from "../../hooks/useRequestData";
import {BASE_URL} from "../../constants/urls";
import {goToHomePage} from "../../routes/coordinator";
import {ButtonBack} from "../SignUpPage/styled";
import {useHistory} from "react-router-dom"

const RestaurantDetailPage = (props) => {
    useProtectedPage()
    const params = useParams()
    const history = useHistory()
    const [restaurant, setRestaurant] = useRequestData(
        {},
        `${BASE_URL}/restaurants/${params.id}`)

        console.log(restaurant)

        {/* Map para puxar a info dos produtos do menu*/}
    const restaurantItems = restaurant.restaurant && restaurant.restaurant.products.map((item) => {
        return (
            <div>
                <p> Categoria: {item.category} </p>
                <p> Foto: {item.photoUrl} </p>
                <p> Nome: {item.name} </p>
                <p> Descrição: {item.description} </p>
                <p> Preço: R$ {item.price} </p>
                <br/>
            </div>
        )
    })

    return (
        <div>
            <TextContainerHeader>
                <Text fontSize="16px">Restaurante</Text>

                {/* Botão voltar para a HomePage*/}
                <ButtonBack onClick={() => goToHomePage(history)}/>
            </TextContainerHeader>

            {/* DIV contendo as informações do do restaurante (topo da tela) */}
            <div>
                <p> Logo: {restaurant.restaurant && restaurant.restaurant.logoUrl}</p>
                <p> Nome: {restaurant.restaurant && restaurant.restaurant.name}</p>
                <p> Categoria: {restaurant.restaurant && restaurant.restaurant.category}</p>
                <p> Tempo de Entrega: {restaurant.restaurant && restaurant.restaurant.deliveryTime} min</p>
                <p> Taxa de Entrega: R$ {restaurant.restaurant && restaurant.restaurant.shipping},00</p>
                <p> Endereço: {restaurant.restaurant && restaurant.restaurant.address}</p>
            </div>
            <hr/>
            <div>
                <div>
                    {restaurantItems}
                </div>
            </div>
        </div>
    )
}

export default RestaurantDetailPage;
