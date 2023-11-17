import React, { useState } from 'react';

export default function AppForm () {
  const [form, setForm] = useState({name:"", email:""});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(()=>({...form, [name] : value}));
  }
  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>name</label>
      <input type="text" id="name" name="name" value={form.name} onChange={handleChange}></input>
      <label htmlFor="email">email</label>
      <input type="email" id="email" name="email" value={form.email} onChange={handleChange}></input>
      <button>submit</button>
    </form>
  );
}