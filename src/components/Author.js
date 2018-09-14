import React, { Component } from 'react';
import '../styles/App.css';

class Author extends Component {
   constructor(props){
        super(props);
    }
    
  render() {
    return (
        <div>
           <label>id: {this.props.episode_id} </label><br/>
           <label>title: {this.props.title} </label><br/>
           <label>title_romanji: {this.props.title_romanji} </label><br/>
           <label>aired: {this.props.aired} </label><br/>
           
        </div>
    );
  }
}

export default Author;