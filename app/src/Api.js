import React, { Component } from 'react'

class Api extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const apiKey = '200240757-32116253e69ba7842c59fc6768d54577'
    const apiUrl = `https://www.hikingproject.com/data/get-trails?lat=39.7434546&lon=${this.props.lon}&maxDistance=10&key=${apiKey}`
  }

  render () {
    return(
      console.log()
    )
  }
}

export default Api