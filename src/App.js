import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    name: 'Nicky',
    color: 'red',
    count: 5,
    label: '',
  }

  changeColor = () => {
    this.setState({
      label: "Wait for it...."
    })

    const countDown = setInterval(() => {
      if (this.state.count !== 0) {
        this.setState(prevState => ({
          count: prevState.count - 1,
        }))
      }
    }, 500)

    setTimeout(() => {
      this.setState(prevState => ({
        name: prevState.name.toUpperCase() + ' BANG !!!',
        color: 'green',
        label: '',
      }))
      clearInterval(countDown)
    },2500)
  }  




  render() {
    return (
      <div className='App'>
        <h1 style ={{color: this.state.color}}>{this.state.name}</h1>
        <h3>{this.state.label}{this.state.count}</h3>
        <button
        onClick={this.changeColor}
        >Change Colour!</button>
      </div>
    );
  }
}

export default App;
