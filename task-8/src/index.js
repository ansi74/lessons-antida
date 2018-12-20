import React from 'react';
import ReactDOM from 'react-dom'; 
import Loadable from 'react-loadable';
 
const HelloWorld = Loadable({
    loader: () => import('./helloWorld'),
    loading() {
        return <div>Loading...</div>
    }
});
//const Content=ScoreCalc+HelloWorld;
const domContainer = document.querySelector('#react_container');

ReactDOM.render(
  <HelloWorld/>,
  domContainer
);
