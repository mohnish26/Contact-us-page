import React, { useState } from 'react';
import './Main.css';

export default function Main() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textarea, setTextarea] = useState('');
  const [names, setNames] = useState('');
  const [emails, setEmails] = useState('');
  const [textareas, setTextareas] = useState('');

  const submit = (event) => {
    event.preventDefault(); 
    setNames(name);
    setEmails(email);
    setTextareas(textarea);
  };

  return (
    <div className='Main-div-class'>
      <div>
        <div className='support-btn-div'>
          <div className='support-btn'>
            <button className='support-chat'>via support chat</button>
            <button className='via-call'>via call</button>
          </div>
          <button className='via-email'>via email from</button>
        </div>
        <div>
          <div className='form-div'>
            <form onSubmit={submit}>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Textarea</label>
              <textarea
                rows='8'
                className='text-area'
                name='text'
                value={textarea}
                onChange={(e) => setTextarea(e.target.value)}
              ></textarea>

              <button type='submit' className='submit'>
                submit
              </button>
            </form>
          </div>
          <div>{names + ' ' + emails + ' ' + textareas}</div>
        </div>
      </div>

      <div>
        <img src='/images/image.svg' alt='Image description' />
      </div>
    </div>
  );
}
