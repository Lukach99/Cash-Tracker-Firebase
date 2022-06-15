import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import CardList from '../components/CardList';
import FormSection from '../components/FormSection';
import Header from '../components/Header';
import NavMenu from '../components/navMenu';
import  { ExpensesProvider } from '../contex/expenses.contex';

import './App.scss';
import ExpensesOverview from './ExpenseDashboard/ExpenseOverview';
import ExpensePage from './ExpenseDashboard/ExpensePage';


function App() {



  return (
    <div className="App">
      <Header></Header>
      <NavMenu></NavMenu>

      <section className='main-page'>
        
        
      <ExpensesProvider>
        <Routes>
            <Route path="*" element={<Navigate to="/expenses" replace />} />
            <Route path="/expenses" element={<ExpensePage />} />
            <Route path="/overview" element={<ExpensesOverview />} />
      
        </Routes>
      </ExpensesProvider>

        
            
        
      </section>
      
    </div>
  );
}

export default App;
