
import CardList from './CardList';
import { folks } from './folks';
import SearchBox from './SearchBox';
import React, { Component } from 'react';
 

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
    const filteredfolks = folks.filter(folk =>{
      return folk.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !folks.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
         {/* <Scroll>
            <CardList folks={filteredRobots} />
          </Scroll>*/}
        </div>
      );
  }
}

export default App;