import { BasketItem } from "./BasketItem"

const BasketList = (props) => {
    const {order = [], handleBasketShow = Function.prototype} = props

    const totalPrice = order.reduce((sum, el) => {
        return sum += el.price * el.quantity
    }, 0)


    return <ul className="collection basket-list">
      <li className="collection-item active">Корзина
        <span class="secondary-content"><i class="material-icons" onClick={handleBasketShow}>close</i></span>
      </li>
      {
        order.length ? order.map(el => <BasketItem key={el.id} {...el} />) 
        : <li className="collection-item">Корзина пуста</li>}

      <li className="collection-item active">Общая стоимость: {totalPrice} руб. </li>
    </ul>
}

export {BasketList}