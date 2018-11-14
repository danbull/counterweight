import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Editorial from './components/Editorial';
import Siema from 'siema';

import './App.css';
import LineGraph from './components/LineGraph';

class App extends Component {
  constructor() {
    super();

    this.slider = React.createRef();
  }

  componentDidMount() {
    const slider = this.slider.current;
    
    new Siema({
      selector: slider
    });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <LineGraph />
          <div id="slider" ref={this.slider}>
            <Editorial />
            <Editorial />
            <Editorial />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
