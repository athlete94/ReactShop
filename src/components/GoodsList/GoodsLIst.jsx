import { GoodsItem } from "./GoodsItem"

const GoodsList = (props) => {
    const {goods = [], addToBasket = Function.prototype} = props // по умолчанию массив

    // проверка на ошибку
    if(!goods.length) {
        return <p>Nothing here!</p>
    }

    // мапим массив товаров
    return <div className="goods">
        {goods.map(el => <GoodsItem key={el.id} {...el} addToBasket={addToBasket} />)}
    </div>
}

export {GoodsList}