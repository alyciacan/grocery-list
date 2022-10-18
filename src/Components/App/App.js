import './App.css';
import { Component } from 'react';
import Form from '../Form/Form';
import List from '../List/List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  addToList = (item) => {
    console.log(item)
    this.setState({list: [...this.state.list, item]})
  }

  render() {
    return (
    <div className="App">
      <Form addToList={ this.addToList } />
      <List list={ this.state.list } />
    </div>
  );
  }
}

export default App;
