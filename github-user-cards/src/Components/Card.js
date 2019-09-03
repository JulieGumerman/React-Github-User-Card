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
                            <h3>{user.login}</h3>
                            <a href={user.html_url} target="_blank">Link to user</a>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Card;