const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity} = props
    return <div>
        <li className="collection-item" >
            {name} x{quantity} = {price*quantity}

            <span class="secondary-content"><i class="material-icons">close</i></span>
        </li>
    </div>
}

export {BasketItem}