
/**
 *@author Quinn Logee
 *@version 0.01
 * @summary rolls an input type of dice an input number of time
 * @todo nothing
 */

"use strict";
let balance, minus, add, donate;
balance = 1.34;

document.getElementById(`withdraw`).addEventListener("click", function withdraw() {

    minus = Number(window.prompt(`How much do you want to withdraw?  `));

    balance -= minus;

    window.alert(`Your new balance is ${balance}`);
});

document.getElementById(`b&s`).addEventListener("click", function getBalance() {

    window.alert(`${balance}`)
});

document.getElementById(`acct`).addEventListener("click", function getBalance() {

   window.alert(`Your balance is ${balance}`)
});

document.getElementById(`transfer`).addEventListener("click", function transfer(){

    Number(window.prompt(`Enter the account number you would like to transfer from/to  `));
    
    Number(window.prompt(`How much would like to transfer  `));
});

document.getElementById(`deposit`).addEventListener("click", function deposit()  {

    add = Number(window.prompt(`How much would you like to deposit?  `));

    balance += add;

    window.alert(`Your new balance is ${balance}`)
});

document.getElementById(`donate`).addEventListener("click", function deposit()  {

    donate = Number(window.prompt(`How much would you like to donate?  `));

    window.prompt(`where would you like to donate?  `);

    balance -= donate;

    window.alert(`Your new balance is ${balance}`)
});

document.getElementById(`depcash`).addEventListener("click", function deposit()  {

    window.alert(`You must go to your local bank to do this.`)
});

document.getElementById(`return`).addEventListener("click", function deposit()  {

    window.alert(`You must go to your local bank to do this.`)
});

document.getElementById(`deposit`).addEventListener("click", function deposit()  {

    add = window.prompt(`How much would you like to deposit?  `);

    balance += add;

   window.alert(`Your new balance is ${balance}`)
});

