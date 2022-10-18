import './List.css';
import Item from '../Item/Item';

const List = (props) => {
    const groceryList = props.list.map(item => {
        return (
            <Item  
                id={item.id}
                amount={item.amount}
                name={item.name}
            />
        )
    }
    )
    
    return (
    <div className="list">

    </div>
    )
}

export default List;