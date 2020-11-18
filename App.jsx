import React from 'react';
import './index.css';

let currTime = new Date().getHours();
let greeting = '';
const cssStyle = { };

if(currTime>=4 && currTime<12) {
  greeting = 'Good Morning';
  cssStyle.color = 'green';
} else if(currTime>=12 && currTime<16) {
  greeting = 'Good Afternoon';
  cssStyle.color = 'Orange';
} else if(currTime>=16 && currTime<20) {
  greeting = 'Good Evening';
  cssStyle.color = 'Blue';
} else {
  greeting = 'Good Night';
  cssStyle.color = 'black';
}

function App() {
   return(
      <>
         <div>
            <h1>Hello there! <span style={cssStyle}>{greeting}</span></h1>
         </div>
      </>
   );
}

export default App;