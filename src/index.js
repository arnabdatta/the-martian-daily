import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageBody from './PageBody';
import PageHeader from './PageHeader';

ReactDOM.render(<PageHeader />, document.getElementById('header'));
ReactDOM.render(<PageBody />, document.getElementById('allcontent'));