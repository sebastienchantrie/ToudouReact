import React from "react";

const TodoDelete = ({ details, onDelete }) => (
  <li>
    {details.nom} <button onClick={() => onDelete(details.id)}>X</button>
  </li>
);

export default TodoDelete;
