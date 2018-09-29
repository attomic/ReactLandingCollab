import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './Navbar.jsx';
import {Jumbotron} from './Jumbotron.jsx';

//here you tell react to put <NavBar /> inside the #myApp DOM element 

export class Home extends React.Component{
    
    render(){
        return (
            <div>
                <NavBar/>
                <Jumbotron/>
            </div>
        );
    }
}