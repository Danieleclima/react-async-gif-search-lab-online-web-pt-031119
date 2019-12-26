import React, { Component } from 'react';

import GifList from '../components/GifList'

class GifListContainer extends Component {
    state = {
        gifs: []
      }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=jCd7ds89RUUKuRMYoCFpWAEPj1v08OGy&rating=g')
        .then(res => res.json())
        .then(json => this.setState({
            gifs: json
        }))
    }

    render(){
       return (<GifList gifs={this.state.gifs} />) 
    }
}

export default GifListContainer;