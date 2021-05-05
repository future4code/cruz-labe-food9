import react from 'react'

const OrderHistory = (props) => {
    return (
        <div>
            <p>{props.restaurantName}</p>
            <p>Subtotal:{props.totalPrice}</p>
        </div>

    )
}
export default OrderHistory;