import React from "react";
import ReactDOM from "react-dom";
import TodoDelete from "./Todo/TodoDelete";
import TodoForm from "./Todo/TodoForm";
import { Col, Row } from 'reactstrap';

import './App.css'

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
        <Row className="sous-title">
            <h2> In progress</h2>
            <h2>Done</h2>
            <h2>To do</h2>
        </Row>

        <Row>
          <Col sm={{ size: 3 , offset: 1}}>
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
          </Col>

          <Col sm={{ size: 3, offset: 1 }}>
            <div className="card"></div>
          </Col>

          <Col sm={{ size: 3, offset: 1 }}>
            <div className="card"></div>
          </Col>

        </Row>
        <TodoForm onClientAdd={this.handleAdd} />

      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
