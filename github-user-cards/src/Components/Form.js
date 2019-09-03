import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: []
        }
    }

    handleChange = e => {
        console.log(e.target.value);
        console.log(this.props.user);
        this.props.user.map(user => user.login.includes(e.target.value)?console.log(user.login):"no match")
    }

    render() {
        return(
            <form>
                <input type="text" onChange={this.handleChange} />
            </form>
        ); //end return
    }//end render

}

export default Form;