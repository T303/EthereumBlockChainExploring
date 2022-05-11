//import React from "react";
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import React, { useContext } from "react";
import BalanceContext from "./balance-context";

 
class AddressBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address: null,
      accountBalance: null
    }
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({address: event.target.value})
  }

  handleSubmit = async (e) =>{
    e.preventDefault();
    const setBalance = useContext(BalanceContext);

    

    fetch('http://localhost:4000/accountbalance')
    .then(response => response.json())
    .then(data => this.setState({accountBalance: data},
      function(){
        setBalance(420);
        console.log(`The React context is ${this.context}`)
        alert(`You address is ${this.state.address} and it has a balance of ${this.state.accountBalance} eth`);
      }))
  }

  render(){
    return(
      <div>
      <Input placeholder="Ethereum Public Address" onChange={this.handleChange} width="1200px" size='xl' />
      <Button onClick={this.handleSubmit} size='xl'>Submit</Button>
    </div>
    )
  }
}
 
export default AddressBox;