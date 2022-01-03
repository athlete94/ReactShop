import { BasketItem } from "./BasketItem"

const BasketList = (props) => {
    const {order = [], handleBasketShow = Function.prototype, removeFromBasket = Function.prototype} = props

    const totalPrice = order.reduce((sum, el) => { // reduce выполняет коллбэк для каждого элемента массива 1 раз, sum = 0 по умолчанию
        return sum += el.price * el.quantity
    }, 0)


    return <ul className="collection basket-list">
      <li className="collection-item active">Корзина
        <span class="secondary-content"><i class="material-icons" onClick={handleBasketShow}>close</i></span>
      </li>
      {
        order.length ? order.map(el => <BasketItem key={el.id} {...el} removeFromBasket={removeFromBasket} />) 
        : <li className="collection-item">Корзина пуста</li>}

      <li className="collection-item active">Общая стоимость: {totalPrice} руб. </li>
    </ul>
}

export {BasketList}