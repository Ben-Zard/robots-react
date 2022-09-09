import './App.css';
import {React,Component} from 'react';
import Cardlist from './componets/Cardlist';
import Scroll from './componets/Scroll';
import Searchbox from './componets/Searchbox';


class App extends Component() {
  constructor(){
    super()
  this.state ={ 
    robots: [],
    searchtext: ''
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(users => this.setState({robots: users}));
}

onSearch = (event) =>{
  this.setState({searchtext: event.target.value})
  }

  render(){
    const filterrobot = this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchtext.toLowerCase());
    });
      return (
    <div className="App">
      <h1>
        robots
      </h1>
      <Searchbox onSearch = { this.onSearch}/>
      <Scroll>
      <Cardlist robots={filterrobot}/>
      </Scroll>
    </div>
  );
}
}
export default App;
