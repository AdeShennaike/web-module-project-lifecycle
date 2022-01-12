/* eslint-disable react/prop-types */
import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div>
            <img width = '200' src = {this.props.user.avatar_url}/>
            <p>{this.props.user.name}</p>
            <p>({this.props.user.login})</p>
            <p>TOTAL REPOS: {this.props.user.public_repos}</p>
            <p>TOTAL FOLLOWERS: {this.props.user.followers}</p>
        </div>
        )
    }
}

export default User;