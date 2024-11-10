const myForm = document.querySelector('form');
let currentMoney = document.getElementById('money_counter');
const currentExpenses = document.getElementById('money_away');
const currentIncome = document.getElementById('Money_in');
const option = document.getElementById('options')

myForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const deposit_amount = document.getElementById('deposit');
    const widthdraw_amount = document.getElementById('withdraw');
    const toPushDeposit = Number(currentMoney.innerHTML) + Number(deposit_amount.value);
    const toPushWithdraw = Number(currentMoney.innerHTML) - Number(widthdraw_amount.value);
    const toPushExpenses = Number(currentExpenses.innerHTML) + Number(widthdraw_amount.value)
    const toPushIncome = Number(currentIncome.innerHTML) + Number(deposit_amount.value)


    if (option.value === 'Deposit'){
        currentMoney.innerHTML = toPushDeposit;
        currentIncome.innerHTML = toPushIncome;
    } else if(option.value === 'Withdraw'){
        currentMoney.innerHTML = toPushWithdraw;
        currentExpenses.innerHTML = toPushExpenses;
    }

    console.log(toPushDeposit,toPushWithdraw,currentMoney);
})