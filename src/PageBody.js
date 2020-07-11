import React from 'react';
import './index.css';
import MarsWeather from './MarsWeather';
import TwitterContainer from './TwitterContainer';
import MarsPhotoSearch from './MarsPhotoSearch';

class PageBody extends React.Component {
    render() {
        return(
<div className="content">
    <div className="collumns">
        <div className="collumn">
            <div className="head">
                <span className="headline hl3">
                    Mars Weather
                </span>
                <p>
                    <span className="headline hl4">
                        by NASA Insight
                    </span>
                </p>
            </div>
            <MarsWeather/>
        </div>
        <div className="collumn">
            <div className="head">
                <span className="headline hl5">
                    Search Photos
                </span>
                <p>
                    <span className="headline hl6">
                        from NASA repository
                    </span>
                    </p>
                </div>
                <MarsPhotoSearch/>
        </div>
        <div className="collumn">
            <div className="head">
                <span className="headline hl1">
                    Mars 101
                </span>
                <p>
                    <span className="headline hl2">
                        from Nat Geo
                    </span>
                </p>
            </div>
            <iframe width="400" height="250" src="https://www.youtube.com/embed/D8pnmwOXhoY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <span className="citation">
                "It might be helpful to realize, that very probably the parents of the first native born Martians are alive today."
            </span> 
        <p>From its blood-like hue to its potential to sustain life, Mars has intrigued humankind for thousands of years. Learn how the red planet formed from gas and dust and what its polar ice caps mean for life as we know it.</p>
        </div>
        <div className="collumn">
            <div className="head">
                <span className="headline hl1">
                Curiosity Rover Updates
                </span>
                <p>
                    <span className="headline hl4">
                        powered by Twitter
                    </span>
                </p>
                </div>
                <TwitterContainer/>
            </div>
        </div>
    </div>
        )
    }
}

export default PageBody;