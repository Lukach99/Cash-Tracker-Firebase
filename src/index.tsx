import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contex/user.contex';
import './index.scss';
import App from './view/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter> 
    <UserProvider>
        <App />
    </UserProvider>
      
    </BrowserRouter>
);

