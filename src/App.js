  import React, {Component} from "react"

  import ToDoItem from "../src/components/ToDoItem"
  import todosData from "./todosData"


  class App extends Component {

    constructor(){
      super()
      this.state = {
        todos : todosData
      }
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
      this.setState(prevState => {
        const updatedTodos = prevState.todos.map( todo => {
          if(todo.id === id){
            todo.completed = !todo.completed
          }
          return todo
        })
        return {
          todos: updatedTodos
        }
      })
      
    }


    render() {

      const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />)

      return (
        <div className="todo-list">
          {todoItems}      
        </div>
      )
    }
  }

  export default App