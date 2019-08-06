import React from "react";
import ReactDOM from "react-dom";
import TodoDelete from "./Todo/TodoDelete";
import TodoForm from "./Todo/TodoForm";
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane, Button} from 'reactstrap';

import "../src/App.css"

class App extends React.Component {
  state = {
    clients: []
  };

  handleDelete = id => {
    const clients = [...this.state.clients];
    const index = clients.findIndex(client => client.id === id);

    clients.splice(index, 1);

    this.setState({ clients });
  };

  handleAdd = client => {
    const clients = [...this.state.clients];
    clients.push(client);

    this.setState({ clients });
  };

  render() {
    const title = "Tout Doux Liste";

    return (
      <div>
        <h1>{title}</h1>
        <div className="card">
        <ul>
          {this.state.clients.map(client => (
            <TodoDelete
              key={client.id}
              details={client}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        </div>
        <TodoForm onClientAdd={this.handleAdd} />
        
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
