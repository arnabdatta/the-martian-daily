import React from 'react';
const NASA_API_KEY = '9mNZ03zwxAKLqtmUSHCA6ynRTlcsqlpEqElGRLSv';

class MarsWeather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            SolKeys : [],
            WeatherData : []
        }
    }
    componentDidMount() {
        this.getWeatherData();
    }

    getWeatherData() {
        var weatherUrl = 'https://api.nasa.gov/insight_weather/?api_key=' + NASA_API_KEY + '&feedtype=json&ver=1.0';
        fetch(weatherUrl)
        .then(result => result.json())
        .then((data) => {
            this.setState({SolKeys: data.sol_keys, WeatherData : data})
        });
    }
    render() {
        return  (
            <div>
               {this.state.SolKeys.map((solKey) => (
                    <div className="weatherBox">
                        <center><b>Sol {solKey}  |  {this.state.WeatherData[solKey]["Season"]}  | 
                        UTC {new Date(this.state.WeatherData[solKey]["First_UTC"]).toLocaleDateString()}</b><br/> 
                        A: {this.state.WeatherData[solKey]["AT"].av} ℉ | 
                        L: {this.state.WeatherData[solKey]["AT"].mn} ℉ |
                        H: {this.state.WeatherData[solKey]["AT"].mx}  ℉<br/>
                        Pressure: {this.state.WeatherData[solKey]["PRE"].av} Pa
                        </center>
                    </div>
                ))}
            </div>
        );
    }
}

export default MarsWeather;