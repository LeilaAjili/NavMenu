import React, {Component} from 'react';
import navmenu from './navmenu.css';

function menu({x}) {

        return (
         
            <div>
                <div className="div-top">

                </div>


           <ul className="menu">

               {x.map(el=>el.submenu?
               <li className="title">{el.title}
                 <ul className="submenu">
                     {el.submenu.map((el,i)=> <li key={i} className="element"> 
                     <a href="google.com">{el}</a> </li> )}
                     
                </ul>
                </li>
                
                     : <li className="title">{el.title}</li>
               )}
               

           </ul>

           </div>
          
        )
    
}

export default menu;