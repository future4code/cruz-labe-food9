export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToSignUpPage = (history) => {
    history.push("/signup")
}
export const goToAdressPage = (history) => {
    history.push("/adress")
}

export const goToProfilePage = (history) => {
    history.push("/profile")
}

export const goToCartPage = (history) => {
    history.push("/cart")
}

export const goToHomePage = (history) => {
    history.push("/")
}

export const goToRestaurantDetailPage = (history, id) => {
    history.push(`/restaurants/${id}`)
}