import './Item.css';

const Item = (props) => {
    return (
        <div className="item-card">
            <h3>{props.name}</h3>
            <h4>{props.amount}</h4>
            <p onClick={() => props.deleteItem(props.id)}>🗑️</p>
        </div>
    )
}

export default Item;