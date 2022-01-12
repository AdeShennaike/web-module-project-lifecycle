import React from 'react';
import axios from 'axios';
import FollowerList from './components/FollowerList'
import User from './components/User'

class App extends React.Component {
  state = {
    user: {},
    followers: [],
    input: ''
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  componentDidUpdate(preProps, prevState) {
    if (prevState.user !== this.state.user) {
      axios.get(`https://api.github.com/users/${this.state.input}/followers`)
        .then(res =>{
        this.setState({
          ...this.state,
          followers: res.data
        })
        })
        .catch(err => {
        console.error(err)
      })
    }
  }

  handleSearch = (e) => {
    e.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        })
      })
      .catch(err =>{
        console.error(err)
      })
  }

  // handleFollowerClickSearch = (id) => {
  //   const newProfile = id
  //   axios.get(`https://api.github.com/users/${newProfile}`)
  //     .then(res => {
  //       this.setState({
  //         ...this.state,
  //         user: res.data.map(item => {
  //         return item
  //         })
  //       })
  //     })
  //     .catch(err =>{
  //       console.error(err)
  //     })
  // }

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
        <form>
            <input value = {this.state.input} onChange = {this.handleChange} placeholder = 'Github Handle'/>
            <button onClick = {this.handleSearch}> Search </button>
        </form>
        <User user = {this.state.user} />
        <FollowerList followers = {this.state.followers} />
      </div>
    );
  }
}

export default App;
