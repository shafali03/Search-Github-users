import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form'

function App() {
  const [cards, setCards] = useState([])

  const addNewCards = (card) => {
    setCards([...cards, card])
  }

  return (
    <div className="App" data-test='mainApp'>
      <h1 className='pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900'>
        Search a Github User
      </h1>
      <Form onSubmit={addNewCards} />
    </div>
  );
}

export default App;
