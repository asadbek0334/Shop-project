function BasketItem(props){
    const{id, name, price, quantity , incrementQuantity ,decrementQuantity} = props;
    return(
        <li className="collection-item">
            {name} x{quantity} = {price * quantity}
            <span className="secondary-content">
            <i class="fa-solid fa-circle-plus btnq" onClick={() => incrementQuantity(id)}></i>
            <i class="fa-solid fa-circle-minus btnq" onClick={() => decrementQuantity(id)}></i>
            <i class="fa-solid fa-trash basket-delete btnq" onClick={() => props.removeFromBasket(id)}></i>
            </span>
        </li>
    )
}

export default BasketItem;