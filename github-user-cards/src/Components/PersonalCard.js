import React from "react";
import axios from "axios";
import Card from "./Card";

class PersonalCard extends React.Component{
    constructor() {
        super();
        this.state = { 
            user: [{}]
        } //end this state
    }//end constructor

    componentDidMount() {
        axios
            .get("https://api.github.com/users/JulieGumerman")
            .then(res => {
                console.log(res);
                this.setState({user: [res.data]});
                console.log("this is the state!", this.state);
            })
            .catch(err => console.log("Well, that sucks!", err))
    }
    render() {
        return(
                <Card user={this.state.user} />
        ); //close return
    } //close render
} //close PersonalCard

export default PersonalCard;
