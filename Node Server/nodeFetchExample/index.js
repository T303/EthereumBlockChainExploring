import fetch from 'node-fetch';
//const express = require('express');
import express from 'express';
import cors from 'cors'
//import { all } from 'express/lib/application';
const app = express();
const router = express.Router();
app.use(cors());

//const fetch = require('node-fetch')

const publicAddress = '0x750Ca59270Bdf16507Ff977037a49a8cFb6F98b9'.toLowerCase();
//publicAddress = publicAddress.toLowerCase();
const apiKey = 'GA1IUKK3HB1J7FY12PDY1KCESRY32WPUCT'

function toEther(wei){
    return  wei / Math.pow(10, 18);
}

function toHumanTime(epochTime){
    return new Date( epochTime * 1000);
}

const balanceResponse = await fetch(`https://api.etherscan.io/api?module=account&action=balance&address=${publicAddress}&tag=latest&apikey=${apiKey}`);
    //.then(res => res.text())
    //.then(text => console.log(text));
const balancedData = await balanceResponse.json();
const balanceInWei = balancedData.result;
//console.log(data);
console.log("balance in wei is " + balanceInWei);
const balanceInEther = balanceInWei / Math.pow(10, 18);
console.log("balance in Ether is " + balanceInEther);

const transactionHistoryResponse = await fetch(`https://api.etherscan.io/api
?module=account
&action=txlist
&address=${publicAddress}
&startblock=0
&endblock=99999999

&offset=10
&sort=asc
&apikey=${apiKey}`);

const transactionData = await transactionHistoryResponse.json();
//const transactionDataText = await transactionHistoryResponse.text();
//console.log(transactionDataText);
const transactions = transactionData.result;
//console.log("---ALL TRANSACTIONS---")
for(const transaction of transactions){
    //console.log(`${toEther(transaction.value)} moved from ${transaction.from} to ${transaction.to}`);
}

let incomingTransactions = [];

console.log("---INCOMING TRANSACTIONS---");
for(const transaction of transactions){
    if(transaction.to === publicAddress){
        incomingTransactions.push(transaction);
        console.log(`${toEther(transaction.value)} moved from ${transaction.from} to ${transaction.to} at ${toHumanTime(transaction.timeStamp)}`);
    }
    //console.log(`${toEther(transaction.value)} moved from ${transaction.from} to ${transaction.to}`);
}
//const firstTransaction = transactions[0];
//console.log(firstTransaction.hash);

//console.log("transactions: " + transactionData.result);


/*fetch('https://google.com')
    .then(res => res.text())
    .then(text => console.log(text));
*/
const port = '4000';

app.set('port', port);

app.listen(4000, () =>
  console.log('Example app listening on port 4000!'),
);

app.get('/incomingTransactions', function(req, res){
    //res.send(JSON.stringify(incomingTransactions));
    res.json(incomingTransactions);
});

app.get('/accountbalance', function(req, res){
    //res.send(JSON.stringify(incomingTransactions));
    res.json(balanceInEther);
});


