import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Poems } from './components/poems/Poems';
import { CreatePoemForm } from './components/createPoemForm/CreatePoemForm';
import Axios from 'axios'

function App() {
  const [ poemsList, setPoemsList ] = useState([])
  useEffect(() => {
      Axios.get('http://localhost:3001/poems').then((response) => {
      setPoemsList(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Poems poems={poemsList} />
      <CreatePoemForm />
    </div>
  );
}

export default App;
