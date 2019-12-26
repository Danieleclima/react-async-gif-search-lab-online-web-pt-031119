import React, { Component } from "react";
// import GiftListContainer from '../containers/GifListContainer'

class GifList extends Component {
    constructor(){
        super()
    }
    
    list = () => {
        this.props.gifs.map(gift => {
            return <li>{gift.images.original.url}</li>
        })
    }

    render(){
        return (
            <ul>
              {this.list()}  
            </ul>
        )
    }
}

export default GifList;