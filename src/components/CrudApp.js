"use client";
import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 0,
    name: "admin",
    password: "root",
  },
  {
    id: 1,
    name: "john",
    password: "ripper",
  },
  {
    id: 2,
    name: "mike",
    password: "wazoo",
  },
  {
    id: 3,
    name: "jean",
    password: "password",
  },
  {
    id: 4,
    name: "kendrick",
    password: "not_lamar",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Are you sure to delete this register with the id '${id}?`
    );

    if (!isDelete) {
      return;
    } else {
      let newData = db.filter((el) => el.id != id);
      setDb(newData);
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApp;
