import React, {Component} from 'react';

import './App.css';
import Navmenu from './components/navmenu/navmenu';
import {data, data2} from "./data"








class App extends Component{

    render(){


        return(

            <Navmenu x={data}/>


        );
    }
    
}

export default App;