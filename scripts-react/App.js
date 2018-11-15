import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fruits: ["banana","apple"]
    }
  }
  handleClick = ()=>{
    this.setState({fruits: [...this.state.fruits,"plum"]})
  }
  render() {
    return (
      <div className="App">
        React Component
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default App;
