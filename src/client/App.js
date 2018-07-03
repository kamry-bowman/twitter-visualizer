import React, {
  Component,
} from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ProcessingPage from './components/ProcessingPage'; 
import Footer from './components/Footer';
import dummydata from './dummydata';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      cards: [],
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      cards: dummydata.cards,
    });
  }

  handleSearchInput(event) {
    this.setState({
      searchInput: event.target.value,
    });
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    alert('sent ', this.state.searchInput);
  }

  render() {
    return (
      <div className="app">
      <Route exact to={'/'} render={ () => (
        <div>
        <Header searchInput={this.state.searchInput} handleChange={this.handleSearchInput} handleSubmit={this.handleSearchSubmit} />
        <main>
          <Gallery cards={this.state.cards} />
        </main>
        <Footer text="© 2018 TweetCollage. All Rights Reserved." />
        </div>)
      } />
      <Route exact to={'/processing/'} component={ProcessingPage} />
      </div>
    );
  }
}

export default App;
