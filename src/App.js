import './App.css';
import {React,Component} from 'react';
import Cardlist from './componets/Cardlist';
import { robots } from './componets/robots';
import Searchbox from './componets/Searchbox';


class App extends Component() {
  constructor(){
    super()
  this.state ={ 
    robots: robots,
    searchtext: ''
  }
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
      <Cardlist robots={filterrobot}/>
    </div>
  );
}
}
export default App;
