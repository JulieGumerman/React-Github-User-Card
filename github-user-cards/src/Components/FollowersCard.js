import React from "react";
import axios from "axios";
import Card from "./Card";

class FollowersCard extends React.Component{
    constructor() {
        super();
        this.state = {
            users: [{
            }]
        }
    } //end constructor
    
    componentDidMount() {
        axios
            .get("https://api.github.com/users/JulieGumerman/followers")
            .then(res => {
                console.log(res);
                this.setState({users: res.data});
                console.log("followers' state", this.state.users);
            })
    }

    render() {
        return (
            // <CardForFollowers user={this.state.user} />
        <Card user={this.state.users}/>
            
        )
    }
}

export default FollowersCard;