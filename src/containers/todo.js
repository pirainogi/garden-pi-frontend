import React from 'react';
import ActionCard from '../components/actionCard';
import '../css/todo.css';

const ToDo = () => {

  return(
    <div className="todo">
      <h1>I hold all of the to do cards</h1>
      <ActionCard />
      <ActionCard />
      <ActionCard />
    </div>
  )
}

export default ToDo;
