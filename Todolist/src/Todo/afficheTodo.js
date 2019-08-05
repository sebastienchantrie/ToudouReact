import React , {Component} from 'react'

class AfficheTodo extends Component {
    type(event) {
        this.setState({
            userInput: event.target.value
        } , () => console.log(this.state.userInput))
    }   
    addTodo(event) {
        event.preventDefault();
        this.setState({
            items: [...this.state.items, this.state.userInput],
            userInput: ''
        })
    }
    
    deletTodo(event) {
        event.preventDefault();
        const tab = this.state.items;
        const index = tab.indexOf(event.target.value)
        tab.splice(index, 1)
        this.setState({
            items: tab
        })
    }
    
    
    AfficheTodo(event) {
        return this.state.items.map((item) => {
            return (
                <div className="list-group-item"
                key={item}>
                    {item}  | <button onClick={this.deletTodo.bind(this)}>Supprimer</button>
                </div>
            )
        })
    }

    render () {
        return (
            <div className="row">
            <div className="AfficheTodo list-group">
                {this.AfficheTodo()}
            </div>
            </div>
        )
    }
}
export default AfficheTodo;