import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import './styles/stytlesheet.css';

// const tasks = ['Buy milk', 'Buy eggs', 'Buy bread'];

// const element = 
// <div>
//   <h1>My Tasks</h1>
//   <ol> 
//     {tasks.map((task, index) => 
//       <li key={index}>{task}</li>)}
//   </ol>
// </div>
  
// const element = React.createElement('ol', null,
//   tasks.map((task, index) => React.createElement('li', {key: index}, task))
// );

ReactDOM.render(<Main/>, document.getElementById('root'));