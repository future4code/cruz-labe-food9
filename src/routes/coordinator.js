export const goToLoginPage = (history) => {
    history.push("/")
}

export const goToSignUpPage = (history) => {
    history.push("/signup")
}
export const goToAdressPage = (history) => {
    history.push("/adress")
}

export const goToHomePage = (history) => {
    history.push("/home")
}

export const goToProfilePage = (history) => {
    history.push("/profile")
}

export const goToProfileUpdatePage = (history) => {
    history.push("/profileUpdate")
}

export const goToCartPage = (history) => {
    history.push("/cart")
}

export const goToIndiqueUmAmigoPage = (history) => {
    history.push("/indiqueUmAmigo")
}
export const goToCuponsPage = (history) => {
    history.push("/cupons")
}
export const goToPedidosPage = (history) => {
    history.push("/pedidos")
}
export const goToPagamentoPage = (history) => {
    history.push("/pagamento")
}
export const goToAjudaPage = (history) => {
    history.push("/help")
}
export const goToAvaliacoesPage = (history) => {
    history.push("/avaliacoes")
}


export const goToRestaurantDetailPage = (history, id) => {
    history.push(`/restaurants/${id}`)
}