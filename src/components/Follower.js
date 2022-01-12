/* eslint-disable react/prop-types */
import React from 'react';

class Follower extends React.Component {
    render() {
        return(
            <div>
                <img width = '200' src = {this.props.gitProfiles.avatar_url}/>
                <p>{this.props.gitProfiles.name}</p>
                <p>{this.props.gitProfiles.login}</p>
                <p>TOTAL REPOS: {this.props.gitProfiles.public_repos}</p>
                <p>TOTAL FOLLOWERS: {this.props.gitProfiles.followers}</p>
            </div>
        )
    }
}
export default Follower;