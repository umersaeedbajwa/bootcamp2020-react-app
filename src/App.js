import React from 'react';
import './App.css';
import New from './course.js';

function App() {
  return (
    <div className="App">
      <h1>Piaic Courses list</h1>
      <h2>Piaic offer following 4 courses.</h2>
      <ol><h3>
          <li class="Alignment"><New course_no= "1st" course_name= { "Artificial Intelligence" }/></li>
          <li class="Alignment"><New course_no= "2nd" course_name= { "Cloud Computing" }/></li>
          <li class="Alignment"><New course_no= "3rd" course_name= { "Blockchain" }/></li>
          <li class="Alignment"><New course_no= "4th" course_name= { "Internet of things." }/></li> 
          </h3>
      </ol>
    </div>
  );
}

export default App;
