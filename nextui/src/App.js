import ReactDOM from 'react-dom';
import React, { useState } from 'react';

import './App.css';
import AddressBox from './Components/AddressBox';
import BalanceBox from './Components/BalanceBox';
import BalanceContext from "./Components/balance-context";



const App = () => {

  const Balance = useState(69);
  const value = Balance

  return (
    <div>
      <AddressBox/>
      <BalanceContext.Provider value={value}>
        <BalanceBox/>
      </BalanceContext.Provider>
      
    </div>
    
  );
};

export default App;
