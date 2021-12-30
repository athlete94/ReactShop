const GoodsItem = (props) => {

    const {
        id,
        name, 
        description, 
        price,
        full_background,
        addToBasket = Function.prototype
    } = props

    return <div className="card">
          <div className="card-image">
            <img src={full_background ? full_background: "https://via.placeholder.com/300/09f/fff.pngC/O"} alt={name} />
          </div>
          <div className="card-content">
            <span className="card-title">{name}</span>
            <p>{description}</p>
          </div>
          <div className="card-action">
                <button className="btn" onClick={() => addToBasket({
                    id,
                    name,
                    price
                })}>Купить</button>
                <span className="right" style={{fontSize: '18px'}}>{price} rub</span>
          </div>
          
        </div>   
} 
export {GoodsItem}

