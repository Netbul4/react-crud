"use client";
import React, { useState } from "react";
import SelectList from "./SelectList";

const Selects = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  let token = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c";

  return (
    <div>
      <h2>Nested Selects</h2>
      <h3>Mexico</h3>
      <SelectList
        title="state"
        object="estado"
        url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${token}`}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="municipality"
          object="municipios"
          url={`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}/?token=${token}`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title="colony"
          object="colonia"
          url={`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${town}/?token=${token}`}
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default Selects;
