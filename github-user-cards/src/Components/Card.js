import React from "react";
import styled from "styled-components";

let UserCard = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    text-align: center;
    width: 200px;
    padding-top: 30px;
    padding-bottom: 30px;
    margin: 30px;
`
let UserImg = styled.img`
    width: 150px;
    border-radius: 50%;

`
let CardWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`
let StyledA = styled.a`
    text-decoration: none;
    color: #FA8072;
    padding: 5px;
    border-radius: 5px;
    font-size: 30px;
`

class Card extends React.Component {
    constructor(props) {
        super(props);
    }//end constructor

    render() {
        return(
            <CardWrap>
                {this.props.user.map(user => {
                    return (
                        <UserCard key={user.id}>
                            <UserImg src={user.avatar_url} />
                            <h3>{user.login}</h3>
                            <StyledA href={user.html_url} target="_blank"><i class="fab fa-github-square"></i></StyledA>
                        </UserCard>
                    );
                })}
            </CardWrap>    
        );
    }
}

export default Card;