"use client";
import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
    {
        id: 0,
        name: "admin",
        password: "root"
    },
    {
        id: 1,
        name: "john",
        password: "ripper"
    },
    {
        id: 2,
        name: "mike",
        password: "wazoo"
    },
    {
        id: 3,
        name: "jean",
        password: "password"
    },
    {
        id: 4,
        name: "kendrick",
        password: "not_lamar"
    },
];

const CrudApp = () => {
    const [db, setDb] = useState(initialDb);
    return(
        <div>
            <h2>CRUD App</h2>
            <CrudForm/>
            <CrudTable data={db}/>
        </div>
    );
}

export default CrudApp;