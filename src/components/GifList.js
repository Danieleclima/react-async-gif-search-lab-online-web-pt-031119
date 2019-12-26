import React, { Component } from "react";
// import GiftListContainer from '../containers/GifListContainer'

class GifList extends Component {

     list = () => {
     return this.props.gifs.data && this.props.gifs.data.slice(0,3).map(gif => {
            console.log(gif.images.original.url)
        return <img src={gif.images.original.url} />
     })}
       
    

    render(){
        return (
            <ul>
              {this.list()}  
            </ul>
        )
    }
}

export default GifList;