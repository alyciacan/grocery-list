import './List.css';
import Item from '../Item/Item';

const List = (props) => {
    const groceryList = props.list.map(item => {
        return (
            <Item  
                id={ item.id }
                amount={ item.amount }
                name={ item.name }
                deleteItem={ props.deleteItem }
            />
        )
    }
    )
    
    return (
    <div className="list">
        { groceryList }
    </div>
    )
}

export default List;