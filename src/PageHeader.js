import React from 'react';
import MarsDate from './MarsDate';
import './index.css';

class PageHeader extends React.Component {
    render() {
        return(
            <div class="head">
                <div class="headerobjectswrapper">
                    <div class="weatherforcastbox">
                        <span style={{fontStyle: "italic"}}>Weatherforcast for the next 24 hours: Plenty of Sunshine</span><br/>
                        <span>Wind: 7km/h SSE; Ther: 21°C; Hum: 82%</span>
                    </div>
                    <header>The Martian Daily</header>
                </div>

                <div class="subhead"><b>Mars</b> | <MarsDate/></div>
            </div>
        )
    }
}

export default PageHeader;