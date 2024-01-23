"use client";
import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data }) => {
  return (
    <div>
      <h3>Data Table</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">No data</td>
            </tr>
          ) : (
            data.map((el) => <CrudTableRow key={el.id} el={el}/>)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
