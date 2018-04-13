import React from 'react'
import axios from 'axios'

const TrailList = (props) => {
    // const get = (p, o) => {
    //   p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o);
    //   console.log('Test:', get(['trails', 'trails', 0, 'name'], props));
    // }
  var {trails: {trails}} = props
  console.log('Test2:', trails) //returns an array of objects
  return null
}

class Form extends React.Component {
  state = {}

  handleSubmit = event => {
    event.preventDefault() 

    const apiKey = '200240757-32116253e69ba7842c59fc6768d54577'
    const apiUrl = `https://www.hikingproject.com/data/get-trails?lat=${this.state.lat}&lon=${this.state.lon}&maxDistance=5&key=${apiKey}`

    axios
      .get(apiUrl)
      .then(resp => {
        this.props.onSubmit(resp.data)
        this.setState({ 
          lat: '',
          lon: ''
        })
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.lat}
          onChange={event => this.setState({ lat: event.target.value })}
          placeholder="Latitude"
        />
        <input
          type="text"
          value={this.state.lon}
          onChange={event => this.setState({ lon: event.target.value })}
          placeholder="Longitude"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

class App extends React.Component {
  state = { trails: [] }

  addNewTrail = trailInfo => {
    this.setState({trails: trailInfo})
}

  render() {
    return (
      <div>
      <h1>39.7434546, -105.2369293</h1>
      <Form onSubmit={this.addNewTrail} />
      <TrailList trails={this.state.trails} />
      </div>
    )
  }
}

export default App
