import React from "react";
import ReactDOM from "react-dom";

import Main from './components/Main.js'

var userData;

$.getJSON( "https://jsonplaceholder.typicode.com/users", function( data ) {
  

  userData = data;

  console.log(userData[0].name);


 
});

ReactDOM.render((
      <div>
  
    
      <Main userData = {userData} />

     




    </div>
    ), document.getElementById("app"));
  
