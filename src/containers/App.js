import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      folks: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ folks: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { folks, searchfield } = this.state;
    const filteredFolks = folks.filter(folk =>{
      return folk.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !folks.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Cyber.folks</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList folks={filteredFolks} />
          </Scroll>
        </div>
      );
  }
}

export default App;