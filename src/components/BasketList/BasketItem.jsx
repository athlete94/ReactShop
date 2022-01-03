const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype} = props

        
    return <div>
        <li className="collection-item" >
            {name} x{quantity} = {price*quantity}

            <span class="secondary-content"><i class="material-icons" onClick={() => removeFromBasket(id)}>close</i></span>
        </li>
    </div>
}

export {BasketItem}