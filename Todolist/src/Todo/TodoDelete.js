import React from "react";

const TodoDelete = ({ details, onDelete }) => (
  <li>
    <span>{details.nom}</span> 
    <button className="btndelete" onClick={() => onDelete(details.id)}>X</button>
  </li>
);

export default TodoDelete;
