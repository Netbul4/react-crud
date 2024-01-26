"use client";
import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, user, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{user}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
