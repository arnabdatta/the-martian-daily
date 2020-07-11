import React from 'react';

class MarsPhotoSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photoResult : []
        }

        this.search = this.search.bind(this);
    }

    search(e) {
        e.preventDefault();
        var query = document.getElementById('searchquery');
        var photoSearchUrl = 'https://images-api.nasa.gov/search?description=' + query.value + '&media_type=image';
        fetch(photoSearchUrl)
        .then(result => result.json())
        .then((data) => {
            this.setState({photoResult: data.collection})
        })
        .then(console.log(this.state.photoResult));
    }

    render() {
        return (
        <form className="formSearch" id="searchPhotoForm">
            <input
            type="text"
            className="inputBoxSearch"
            id="searchquery"
            placeholder="Search"
            />
            <button className="buttonSearch" onClick={this.search}>
            Search
            </button>
        </form>
        )
    }
}

export default MarsPhotoSearch