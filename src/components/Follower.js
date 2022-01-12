/* eslint-disable react/prop-types */
import React from 'react';

class Follower extends React.Component {

    // handleClick = () => {
    //     this.props.handleFollowerClickSearch(this.props.image.login)
    //     }
    
    render() {
        return(
            <div>
                <img width = '150' src = {this.props.image.avatar_url} /> 
                <h3> {this.props.image.login} </h3>
          </div>
        )
    }
}
export default Follower;