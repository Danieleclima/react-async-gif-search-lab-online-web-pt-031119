import React, { Component } from 'react';

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {
    state = {
        gifs: []
      }

    submitHandler= (event) => {
        event.preventDefault()
        console.log(event.target[0].value)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target[0].value}&api_key=jCd7ds89RUUKuRMYoCFpWAEPj1v08OGy&rating=g`)
        .then(res => res.json())
        .then(json => this.setState({
            gifs: json
        }))
    }

    render(){
       return (
    <div>
        <div>
        <GifSearch submiting={this.submitHandler}/>
        </div>
        <div>
       <GifList gifs={this.state.gifs} />
       </div>
    </div>     
        ) 
    }
}

export default GifListContainer;