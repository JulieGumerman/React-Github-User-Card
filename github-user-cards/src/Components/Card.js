import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }//end constructor

    render() {
        return(
            <div>
                {this.props.user.map(user => {
                    return (
                        <div>
                        <img src={user.avatar_url} />
                        <h3>{user.name}</h3>
                        <p>Login: {user.login}</p>
                        <p>Bio: {user.bio}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Card;