import React from 'react';
import CardList from '../components/CardList';
import FormSection from '../components/FormSection';
import Header from '../components/Header';
import  { ExpensesProvider } from '../contex/expenses.contex';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <section className='main-page'>
        <ExpensesProvider>
            <CardList></CardList>
            <FormSection></FormSection>
        
        </ExpensesProvider>
            
        
      </section>
      
    </div>
  );
}

export default App;
