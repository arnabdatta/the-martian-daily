import React from 'react';
import MarsDate from './MarsDate';
import './index.css';

class PageHeader extends React.Component {
    render() {
        return(
            <div className="head">
                <div className="headerobjectswrapper">
                    <header>The Martian Daily</header>
                </div>
                <div className="subhead"><b>Mars</b> | <MarsDate/></div>
            </div>
        )
    }
}

export default PageHeader;