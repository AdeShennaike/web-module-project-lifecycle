/* eslint-disable react/prop-types */
import React from 'react';

class User extends React.Component {
    render() {
        return (
            <form>
                <input value = {this.props.input} onChange = {this.props.handleChange}/>
                <button onClick = {this.props.handleSearch}> Search </button>
            </form>
        )
    }
}

export default User;