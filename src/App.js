import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes.json';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Container from './Components/Container';
import QuoteTable from './Components/QuoteTable';
class App extends Component {

  state = {
    Quotes
  }

  render() {
    return (
      <div className="App">
        <NavBar />
      <Container>
        {this.state.Quotes.map(quote => {
          <li>{quote}</li>

        })}
        <QuoteTable />
        </Container>
        < Footer />
      </div>
    );
  }
}

export default App;
