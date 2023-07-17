import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppMentor from './AppMentor';
import AppMentors from './AppMentors';
import AppForm from './basic/Appform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppForm />
  </React.StrictMode>
);