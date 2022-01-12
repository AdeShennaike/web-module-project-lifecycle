import React from 'react';
import axios from 'axios';
import FollowerList from './components/FollowerList'
import Follower from './components/Follower';
import User from './components/User'

class App extends React.Component {
  state = {
    gitProfiles: [],
    gitProfilesFollowers: [],
    input: ''
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/AdeShennaike')
      .then(res => {
        // console.log(res.data)
        this.setState({
          ...this.state,
          gitProfiles: res.data
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  componentDidUpdate(preProps, prevState) {
    if (prevState.gitProfiles !== this.state.gitProfiles) {
      axios.get('https://api.github.com/users/AdeShennaike/followers')
        .then(res =>{
        console.log(res.data)
        this.setState({
          ...this.state,
          gitProfilesFollowers: res.data
        })
        })
        .catch(err => {
        console.error(err)
      })
    }
  }

  handleSearch = (e) => {
    e.preventDefault()
    const newProfile = this.state.input
    axios.get(`https://api.github.com/users/${newProfile}`)
      .then(res => {
        this.setState({
          ...this.state,
          gitProfiles: res.data
        })
      })
      .catch(err =>{
        console.error(err)
      })
  }

  handleFollowerClickSearch = (id) => {
    const newProfile = id
    axios.get(`https://api.github.com/users/${newProfile}`)
      .then(res => {
        this.setState({
          ...this.state,
          gitProfiles: res.data.map(item => {
          return item
          })
        })
      })
      .catch(err =>{
        console.error(err)
      })
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  render() {
    return(
      <div>
        <h1>GITHUB INFO</h1>
        <User handleChange ={this.handleChange} handleSearch = {this.handleSearch} input = {this.state.input} />
        <Follower gitProfiles = {this.state.gitProfiles} />
        <FollowerList handleFollowerClickSearch = {this.handleFollowerClickSearch} gitProfilesFollowers = {this.state.gitProfilesFollowers} />
      </div>
    );
  }
}

export default App;
