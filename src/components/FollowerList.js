/* eslint-disable react/prop-types */
import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    render() {
        return(
            <div>
            <h2> FOLLOWERS: </h2>
            {this.props.followers.map(image => {
                return( 
                  <Follower image = {image}  key = {image.id} handleFollowerClickSearch = {this.props.handleFollowerClickSearch}/>
                )
            })}
            </div>
        )
    }
}

export default FollowerList;
