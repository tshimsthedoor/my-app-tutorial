import React from "react";
import  ReactDOM  from "react-dom";

function Greeting()
 {
  return (
    <div>
      <Person />
      <Message />
      
    </div>
  );
}

const Person = () => <h2>Mukinza</h2>
const Message = () => {
  return <p>this is my small project</p>
}

ReactDOM.render(<Greeting />, document.getElementById('root'))