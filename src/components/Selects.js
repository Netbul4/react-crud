"use client";
import React, { useState } from "react";
import SelectList from "./SelectList";

const Selects = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  return (
    <div>
      <h2>Nested Selects</h2>
      <h3>Mexico</h3>
      <SelectList
        title="State"
        url=""
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="Municipality"
          url=""
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title="colony"
          url=""
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default Selects;
