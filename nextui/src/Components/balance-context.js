import React from "react";

// set the defaults
const BalanceContext = React.createContext({
  balance: 0,
  setBalance: () => {}
});

export default BalanceContext;
