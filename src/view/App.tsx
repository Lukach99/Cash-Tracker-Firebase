import React from 'react';
import CardList from '../components/CardList';
import FormSection from '../components/FormSection';
import Header from '../components/Header';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className='main-page'>
        <CardList></CardList>
        <FormSection></FormSection>
      </section>
      
    </div>
  );
}

export default App;
