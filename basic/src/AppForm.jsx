import React, { useState } from 'react';

export default function AppForm() {
  const [formValue, setFormValue] = useState({ name: '', email: '' });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  }

  const handleChangeName = (e) => {
    setFormValue((prev) => ({ ...prev, name: e.target.value }));
  }

  const handleChangeEmail = (e) => {
    setFormValue((prev) => ({ ...prev, email: e.target.value }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>이름 : </label>
      <input type="text" id='name' value={formValue.name} onChange={handleChangeName} />
      <label htmlFor='email'>이메일 : </label>
      <input type="email" id='email' value={formValue.email} onChange={handleChangeEmail} />
      <button type='submit'>Submit!</button>
    </form>
  );
}

