import React, { Component } from 'react';
import '../styles/App.css';
import Author from './Author';
//import axios from 'axios';

class AuthorList extends Component {
    constructor(props){
        super(props);
        this.state = {
            answer : []
        };
    }
    
    componentWillMount(){
        var request = new XMLHttpRequest();

        request.open('GET', 'https://api.jikan.moe/v3/anime/1/episodes/2');
        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                console.log('Status:', this.status);
                console.log('Headers:', this.getAllResponseHeaders());
                console.log('Body:', this.responseText);
            
            }
        };
        
        request.send();
        //this.setState({answer : request.responseText });
        
        /*fetch('https://api.jikan.moe/v3/anime/1/episodes') 
            .then(( response ) => { 
                return response.json() 
            })
            .then((anime) => { 
                this.setState({ ans: anime })
            });
        */
        
    /*axios({
            method:'get',
            url:'https://dog.ceo/api/breeds/list/all',
        })
    .then(function(response) {
        console.log(response);
    
    })
    .catch(function (error) {
        console.log(error);
    });
    */
        this.setState({answer : request.responseText });
    
    }
    
  render() {
      
      const domAuthors = this.state.answer.map((anime) => {
          <Author id={anime.episode_id} title={anime.title} title_romanji={anime.title_romanji} aired={anime.aired}/>
      })
        
        
   
    return (
        <div>
            {domAuthors}
        </div>
    );
  }
}

export default AuthorList;