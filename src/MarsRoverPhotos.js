import React from 'react';
const NASA_API_KEY = '9mNZ03zwxAKLqtmUSHCA6ynRTlcsqlpEqElGRLSv';

class MarsRoverPhotos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Photos : []
        }
    }
    componentDidMount() {
        this.getRoverImageData();
    }

    getRoverImageData() {
        var photoUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=' + NASA_API_KEY;
        fetch(photoUrl)
        .then(result => result.json())
        .then((data) => {
            this.setState({SolKeys: data.sol_keys, WeatherData : data})
        });
    }
    render() {
        return  (
            <div>
               {this.state.SolKeys.map((solKey) => (
                    <div class="weatherBox">
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

export default MarsRoverPhotos;