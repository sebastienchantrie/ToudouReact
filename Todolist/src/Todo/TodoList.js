
import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(item) {
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }


    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div className="list-group-item" key={item}>
                    {item} | <button onClick={this.deleteTodo.bind(this, item)}>X</button>
                </div>
            );
        });
    }

    render() {
        return(
            <div>
                <h1 align="center">Ma Tout doux liste</h1>
                <form className="form-row align-items-center">
                    <input 
                        value={this.state.userInput} 
                        type="text" 
                        placeholder="Choses a faire"
                        onChange={this.onChange.bind(this)}
                        className="form-control mb-2"
                    />
                    <button 
                        onClick={this.addTodo.bind(this)} 
                        className="btn btn-cool"
                    >
                        Ajouter
                    </button>
                </form>
                <div className="row">
                    <div className="list-group card">
                        {this.renderTodos()}
                    </div>
                    <div className="droplist ">

                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;