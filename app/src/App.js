import React from 'react'
import axios from 'axios'

const TrailList = (props) => {
    console.log('Props:', props)
    if (props.trails.length > 0) {
      let trail = props.trails[0]
      console.log('Trail:', trail)
      return ( <h1>{trail.name}</h1> )
    }
return ( <h1>Hello!</h1> )
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
    this.setState({trails: trailInfo.trails})
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
