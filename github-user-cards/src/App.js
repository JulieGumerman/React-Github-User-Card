import React from 'react';
import './App.css';
import PersonalCard from "./Components/PersonalCard";
import FollowersCard from "./Components/FollowersCard";
import styled from "styled-components";

const CardHolder = styled.div`
  display: flex; 
  flex-wrap: wrap;
`

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
        <CardHolder>
          <PersonalCard />
          <FollowersCard />
        </CardHolder>
      </div>
    ); //close return
  } //close render
}

export default App;
