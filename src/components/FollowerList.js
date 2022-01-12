/* eslint-disable react/prop-types */
import React from 'react';

class FollowerList extends React.Component {
    render() {
        return(
            <div>
            <h2> FOLLOWERS: </h2>
            {this.props.gitProfilesFollowers.map(image => {
                return( 
                  <div key = {image.id}>
                    <img width = '150' src = {image.avatar_url} /> 
                    <h3> {image.login} </h3>
                  </div>
                )
            })}
            </div>
        )
    }
}

export default FollowerList;
