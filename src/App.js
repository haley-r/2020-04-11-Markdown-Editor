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

  useTemplate=()=>{
    let samplestring =`# Your name  \n  \n## about me: \n  \n type something about yourself!  \n  \n### list some things you like: \n  \n- list item  \n- list item  \n- list item`
    this.setState({
      mdInput: samplestring,
      htmlOutput: (marked(samplestring))
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
            <button onClick={this.useTemplate}>or start with a template</button>
            <textarea value={this.state.mdInput} onChange={this.showHTML}/>
        </div>
        <div id="output-area">
          <h3 id="output-label">here's what you typed, in html:</h3>
          {ReactHtmlParser(this.state.htmlOutput)}
        </div>

      </div>
    );
  }
}

export default App;
