import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    inputText: '',
    data: [],
  }

  


  render() {

    const newElement = [...this.state.data].map((el, index) => {
      return <li key={index}>{el}</li>
    })

    return (
      <div className='App'>
        <h1>ToDo List</h1>
        
        <form onSubmit = {(e) => {
          e.preventDefault();
          const data = [...this.state.data, this.state.inputText]
          this.setState({
            data, inputText: '',
          })
        }}>

          <input 
          type = 'text'  
          value= {this.state.inputText}
          onChange = {(e) => {
            this.setState({inputText: e.target.value})
          }}
          />

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
