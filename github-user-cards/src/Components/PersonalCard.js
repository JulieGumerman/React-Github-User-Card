import React from "react";
import axios from "axios";
import Card from "./Card";

class PersonalCard extends React.Component{
    constructor() {
        super();
        this.state = { 
            user: [{
                avatar_url: "",
                bio: "",
                name: "",
                login: ""
            }]
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
            <div>
                <Card user={this.state.user} />
            </div>
        ); //close return
    } //close render
} //close PersonalCard

export default PersonalCard;
