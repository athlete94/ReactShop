import { useState, useEffect } from "react"
import { GoodsList } from "../components/GoodsList/GoodsLIst"
import { Preloader } from "../components/Preloader"
import {API_URL} from "../config"
import { Cart } from "../components/Cart"
import { BasketList } from "../components/BasketList/BasketList"



const Main = () => {

    const [goods, setGoods] = useState([]) //список товаров
    const [loading, setLoading] = useState(true) //состояние загрузки
    const [order, setOrder] = useState([]) //список заказов
    const [isBasketShow, setIsBasketShow] = useState(false) //состояние показа корзины

    
    // функция добавления товара в корзину
    const  addToBasket = (item) => { 

    // необходимо проверить, есть ли в корзине уже такой товар. Ищем по id
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)  // если есть, вернется id товара, если нет: -1

        if(itemIndex < 0) { // если такого товара в корзине нет, indexItem = -1
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem]) //к текущим заказам добавляем новый
        }
        else {
            const newOrder = order.map((item, index) => {
                if(index === itemIndex) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                else {
                    return item
                }
            })
            setOrder(newOrder)
            
        }      
    }
    // функция удаления товара из корзины
    const removeFromBasket = (id) => {
        const newOrder = order.filter((el) => el.id != id)
        setOrder(newOrder)
    }

    // функция показа корзины
    const handleBasketShow = () => {
        setIsBasketShow(!isBasketShow)
    }

    useEffect(() => {
        fetch(API_URL,{
            headers: {
                'Authorization': "2efba1e0-1dff83a0-63199092-c77c9f47"
         }
        })
        .then(response => response.json())
        .then(data => {
             data.featured && setGoods(data.featured)// data.featured - проверка что данные пришли
             setLoading(false)
        })
    },
    [])

    return <div className="content container">
        <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
        {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}

        {isBasketShow && <BasketList 
                            order={order} 
                            handleBasketShow={handleBasketShow}
                            removeFromBasket={removeFromBasket} />}
    </div>
}

export {Main}