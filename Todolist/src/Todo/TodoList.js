import React, {Component} from 'react';

class Todolist extends Component {
    state = {
        clients : [
            {id: 0, msg:"coucou"},
            {id: 1, msg:"les hibou"}
        ],
        newtodo : ''
    }

    handleDelet = (id) => {
    this.state.clients.slice();
    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);
    this.setState({clients: clients});
    }

    render() {
        return (
            <div>
                <ul> 
                    {this.state.clients.map(client => (
                    <li>
                        {client.msg}{" "} <button onClick={() => this.handleDelet(client.id)} >X</button>
                    </li> 
                ))}
                </ul>
                <form>
                    <input type='text' placeholder="Votre message..."/>
                </form>
            </div>
        )
    }
}

export default Todolist