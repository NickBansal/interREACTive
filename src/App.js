import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    inputText: 'What needs to be done?',
    data: [],
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = [...this.state.data, this.state.inputText]
    this.setState({
      data, inputText: '',
    })
  }

  deleteTodo = (index) => {
    const data = [...this.state.data];
    data.splice(index, 1); 
    this.setState({
      data,
    });
    console.log(data)
  }


  render() {

    const newElement = [...this.state.data].map((el, index) => {
      return <li key={index}
      onClick={() => {this.deleteTodo(index)}}>
      {el}
      </li>
    })

    return (
      <div className='App'>
        <h1>ToDo List</h1>
        
        <form onSubmit = {this.handleSubmit} >
          <input type = 'text'  
          value= {this.state.inputText}
          onChange = {(e) => {
            this.setState({inputText: e.target.value})
          }}
          />
          <button type="submit">SAVE</button>
        </form>

        <div className='ListItems'>
          <ol>
            {newElement}
          </ol>
        </div>

      </div>
    );
  }
}

export default App;
