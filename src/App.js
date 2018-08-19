import React, { Component } from 'react';
import { findLetter } from './Letters/letters';
import LetterRow from './Components/LetterRow';
import './App.css';

class App extends Component {

  state = {
    text: 'Gergely Vizvari',
    elements: []
  }

  componentDidMount() {
    this.splitElements();
  }

  onTextChange = (e) => {
    this.setState({ text: e.target.value }, ()=> this.splitElements());
  }

  splitElements = () => {
    let elements = Array.from(this.state.text).map( letter => findLetter(letter));    
    this.setState({elements});    
  }

  renderLetters = () => {
    let letterRow = this.state.elements.map((item, ind) => <LetterRow key={`letter_${ind}`} item = {item} ind={ind} />);

    return (
      <table style={{width:'80%', margin: '0 auto', borderCollapse: 'collapse' }}>
        <tbody>{letterRow}</tbody>
      </table>
    )
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">

          <h1 className="App-title">Speller</h1>
          <input type="text" value={this.state.text} onChange={this.onTextChange}/>

        </header>

        <div className="App-intro" style={{marginTop : 15}}>          
          {this.renderLetters()}
        </div>
      </div>
    );
  }
}

export default App;
