import React, {Component} from 'react';
import './App.css';

class App extends Component{
  state = {
    mdInput:'',
    htmlOutput: ''
  }

  showHTML=()=>{
    // Create reference instance
    const marked = require('marked');

    // Set options
    // `highlight` example uses `highlight.js`
    marked.setOptions({
      renderer: new marked.Renderer(),
      // highlight: function (code, language) {
      //   const hljs = require('highlight.js');
      //   const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      //   return hljs.highlight(validLanguage, code).value;
      // },
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });

    // Compile
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
            <textarea onChange={this.updateInput}/>
          <button onClick={this.showHTML}>show html</button>
        </div>
        <div id="output-area">
            {this.state.htmlOutput}
        </div>

      </div>
    );
  }
}

export default App;
