import './App.css';
import { Component } from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import { fetchList, postItem, deleteFetch } from '../../apicalls';


class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      error: ""
    };
  }

renderList = () => {
  fetchList()
    .then(listOfItems => this.setState({list: [...listOfItems]}))
}

  componentDidMount = () => {
   this.renderList();
  }

  addToList = (item) => {
    postItem(item)
    .then(() => this.renderList())
    .catch(error => {this.setState({error: error})})
  }

  deleteItem = (id) => {
    deleteFetch(id)
    .then(() => this.renderList())
    .then(() => console.log(this.state.list))
  }

  render() {
    return (
    <div className="App">
      <h1>My Grocery List</h1>
      <Form addToList={ this.addToList } />
      <List 
        list={ this.state.list }
        deleteItem={ this.deleteItem } 
       />
    </div>
  );
  }
}

export default App;
