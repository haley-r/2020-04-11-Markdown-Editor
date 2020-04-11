import React, {Component} from 'react';
import './App.css';
import ReactHtmlParser from 'react-html-parser';
// Create reference instance
const marked = require('marked');

class App extends Component{
  state = {
    mdInput:'# hi',
    htmlOutput: ''
  }

  componentDidMount=()=>{
    this.showHTML()
  }

  showHTML=()=>{
    // use marked.js to convert the markdown into an html string
    this.setState({htmlOutput: (marked(this.state.mdInput))});
  }

  updateInput=(event)=>{
    this.setState({mdInput: event.target.value})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>haley's markdown editor</h1>
        </header>
        <div id="input-area">
          <label htmlFor="md-input">type markdown here:</label>
            <textarea value={this.state.mdInput} onChange={this.updateInput}/>
          <button onClick={this.showHTML}>show html</button>
        </div>
        <div id="output-area">
          {/* use ReactHtmlParser to change the html string to jsx */}
          {ReactHtmlParser(this.state.htmlOutput)}
        </div>

      </div>
    );
  }
}

export default App;
