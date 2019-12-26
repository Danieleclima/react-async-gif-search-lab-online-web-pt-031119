import React, { Component } from "react";
// import GiftListContainer from '../containers/GifListContainer'

class GifSearch extends Component {
       
    

    render(){
        return (
            <form onSubmit={this.props.submiting}>
                <input></input>
                <input type="submit"></input>
            </form>
          
        )
    }
}

export default GifSearch;