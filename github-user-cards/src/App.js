import React from 'react';
import './App.css';
import PersonalCard from "./Components/PersonalCard";
import FollowersCard from "./Components/FollowersCard";

class App extends React.Component {
  //turn into a class
  //retrieve Github info from API
  //console.log it first (in componentDidMount)
  constructor() {
    super();
  
  } 

  render() {
  return (
      <div className="App">
        <h1>Github users!</h1>
        <PersonalCard />
        <FollowersCard />
      </div>
    ); //close return
  } //close render
}

export default App;
