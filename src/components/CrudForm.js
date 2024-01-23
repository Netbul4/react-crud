'use client'
import React, { useState } from 'react';

const initialForm = {
    name: "",
    password: "",
    id: null
}

const CrudForm = () => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {};

    const handleSubmit = (e) => {};

    const handleReset = (e) => {};

    return (
        <div>
        <h3>Add</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Name' onChange={handleChange} value={form.name}/>
            <input type="password" name="password" placeholder='Password' onChange={handleChange} value={form.password}/>
            <input type="submit" value="Send"/>
            <input type="reset" value="Clear" onClick={handleReset}/>
        </form>
    </div>
    );
}
 
export default CrudForm;