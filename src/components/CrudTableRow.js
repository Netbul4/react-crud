"use client";
import React from "react";

const CrudTableRow = ({ el }) => {
  return (
    <div>
      <tr>
        <td>{el.name}</td>
        <td>{el.password}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    </div>
  );
};

export default CrudTableRow;
