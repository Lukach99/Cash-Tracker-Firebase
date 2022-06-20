import React, { useContext } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import CardList from '../components/CardList';
import FormSection from '../components/FormSection';
import Header from '../components/Header';
import NavMenu from '../components/navMenu';
import  { ExpensesProvider } from '../contex/expenses.contex';
import { UserContext, UserProvider } from '../contex/user.contex';

import './App.scss';
import Login from './ExpenseAccount/ExpenseLogin';
import SignUp from './ExpenseAccount/ExpenseSignUp';


import ExpensesOverview from './ExpenseDashboard/ExpenseOverview';
import ExpensePage from './ExpenseDashboard/ExpensePage';


function App() {

  const { user, setUser } = useContext(UserContext);

  return (
    <div className="App">
      
          <Header></Header>
          <NavMenu></NavMenu>
          <p>Welcome {user}</p>
          <section className='main-page'>
        
        
          <ExpensesProvider>
            <Routes>
            <Route path="*" element={<Navigate to="/expenses" replace />} />
            <Route path="/expenses" element={<ExpensePage />} />
            <Route path="/overview" element={<ExpensesOverview />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </ExpensesProvider>


          </section>
      
      
    </div>
  );
}

export default App;
