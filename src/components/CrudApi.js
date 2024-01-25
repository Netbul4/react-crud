"use client";
import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const CrudApi = () => {
  const [db, setDb] = useState([]);
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
      <h2>CRUD Api</h2>
      <article classname="grid-1-2">
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

export default CrudApi;
