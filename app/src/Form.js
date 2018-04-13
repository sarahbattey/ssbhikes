import React, { Component } from 'react'
import Trails from './Trails'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: '',
      longitude: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(event.target.value)
  }

  render() {
    return (
      <div>
      <form>
        <label htmlFor="latitude">Latitude</label>
        <input type="text" name="latitude" id="latitude" value={this.state.latitude} onChange={this.handleChange}/>
        <br />
        <label htmlFor="longitude">Longitude</label>
        <input type="text" name="longitude" id="longitude" value={this.state.longitude} onChange={this.handleChange}/>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <Trails
        lat={this.state.latitude}
        lon={this.state.longitude}
       />
      </div>
    )
  }
}

export default Form