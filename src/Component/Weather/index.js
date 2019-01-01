import React, {Component} from 'react'
import './weather.css'
const axios = require('axios')


function WeatherList(props) {
  return (<ul>Hi</ul>)
}

class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Orlando, Florida',
      showWeather: false,
      forecast: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + this.state.value
    url += "&APPID=0316b806277fa2fc3013cb542462d528"
    // Make a request for a user with a given ID
    axios.get(url)
    .then((response) => {
      // handle success
      console.log(response.data);
      this.setState({
        forecast: response.data,
        showWeather: true
      })
      // icon usage at https://openweathermap.org/weather-conditions
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  render() {
    let wxList
    if (this.state.showWeather) {
      wxList = <WeatherList forecast={this.state.forecast} />
    }
    return(
      <main className='container valign-wrapper'>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input type='text' className='city' value={this.state.value}  onChange={this.handleChange} ></input>
              </div>
              <input className="btn" type="submit" value="Get Weather" />
            </div>
          </form>
          {wxList}
        </div>
      </main>
    )
  }
}

export default Weather