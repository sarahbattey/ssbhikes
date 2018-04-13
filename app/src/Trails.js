import React, {Component} from 'react'

class Trails extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const lat = '39.7434546'
    const lon = '-105.2369293'
    const apiKey = '200240757-32116253e69ba7842c59fc6768d54577'
    const apiUrl = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=10&key=${apiKey}`

    fetch(apiUrl)
    .then((res) => {
      return res.json
    })
    .then((trails) => {
      let trailData = trails.map((trail) => {
        return <p key={trail.id}>{trail.name}</p>
      })
      this.setState({trailData: trailData})
    })
}
  render () {
    return(
      <div>
        {this.state.trailData}
      </div>
    )
  }
}

export default Trails