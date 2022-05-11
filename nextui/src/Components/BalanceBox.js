import React, { Component, useContext } from 'react';
import { Card } from '@nextui-org/react';
import BalanceContext from './balance-context';
/*
class BalanceBox extends Component {
    constructor(props) {
        super(props);
        const Balance = useContext(BalanceContext)
        this.state = {
            balance: 1
        }
    }

    render() { 
        return (
            <Card bordered shadow={false} hoverable css={{ mw: "400px" }}>
                <p>Balance: {Balance}</p>
            </Card>
        );
    }
}
*/

const BalanceBox = () => {
    const bal = useContext(BalanceContext)

    return (
        <Card bordered shadow={false} hoverable css={{ mw: "400px" }}>
            <p>Balance: {bal}</p>
        </Card>
    );
};
 
export default BalanceBox;