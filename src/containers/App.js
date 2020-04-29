import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';







class App extends Component { // a smart component due to having state. usually have a class 
    constructor() { //use constructor to set the state of the app
        super()
        this.state = {
            robots: [], //the state of the app... should be an empty array. 
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') //fetch from url
        .then(response=> response.json())
        .then(users => this.setState({robots: users})); //getting the users and then putting them into robots state.
    }


    onSearchChange = (event) => { // this is the searchchange function which is called. passes this down to the searchbox
        this.setState({ searchfield: event.target.value})
        
        
    }

    render() {
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()); //if the name of the robots includes to lower case 
        })
        return !robots.length ? // if taking time for loading then it display loading. 
            <h1>loading</h1> :
        (
            <div className="tc">
                <h1 className = 'f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} /> {/*anytime there is change on the input it lets the app know there is a change run onSearchChange. which then updates the searchfield then communicate with cardlist.*/}
                <Scroll>    
                   <ErrorBoundry> 
                    <CardList robots = {filteredRobots}/>  {/*cardlist then runs filteredRobots function filter the robots only what includes what is in the search field.*/}
                    </ErrorBoundry>
                </Scroll>    
            </div>
        );

    }
}
    


export default App;
