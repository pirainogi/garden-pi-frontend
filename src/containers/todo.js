import React from 'react';
import ActionCard from '../components/actionCard';
import '../css/todo.css';

const ToDo = () => {

  return(
    <div className="todo">
      <span>I hold all of the to do cards</span>
      <ActionCard />
      <ActionCard />
      <ActionCard />
    </div>
  )
}

export default ToDo;
