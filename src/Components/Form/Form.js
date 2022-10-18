import { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            amount: ""
            }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    submitItem = (e) => {
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            ...this.state
        }
        this.props.addToList(newItem);
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({ name: "", amount: "" })
    }

    render() {
        return (
            <div className="form-container">
            <h2>Enter the required information below:</h2>
            <form>
                <label htmlFor="item">Item:        
                    <input 
                        onChange={this.handleChange}
                        id="name" 
                        type="text" 
                        maxLength="30"
                        value={this.state.name}
                        />
                </label>
                <label htmlFor="quantity">Quantity:
                    <input 
                        onChange={this.handleChange}
                        id="amount"
                        type="text"
                        maxLength="30"
                        value={this.state.amount}
                        />
                </label>
                <button type="submit" onClick={e => this.submitItem(e)}>Submit</button>
            </form>
        </div>
        )
    }
}

export default Form;