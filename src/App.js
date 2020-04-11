import React, {Component} from 'react';
import './App.css';
//ReactHtmlParsel turns html strings to jsx elements
import ReactHtmlParser from 'react-html-parser';
// Create instance from marked.js
const marked = require('marked');

class App extends Component{
  state = {
    mdInput:'# hi',
    htmlOutput: (marked('# hi'))
  }

  showHTML=(event)=>{
    this.setState({
      mdInput: event.target.value,
      htmlOutput: (marked(event.target.value))
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>haley's markdown editor</h1>
        </header>
        <div id="input-area">
          <label htmlFor="md-input">type markdown here:</label>
            <textarea value={this.state.mdInput} onChange={this.showHTML}/>
        </div>
        <div id="output-area">
          {ReactHtmlParser(this.state.htmlOutput)}
        </div>

      </div>
    );
  }
}

export default App;
