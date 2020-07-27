import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form'

function App() {
  return (
    <div className="App" data-test='mainApp'>
      <h1 className='pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900'>
        Search a Github User
      </h1>
      <Form />
    </div>
  );
}

export default App;
