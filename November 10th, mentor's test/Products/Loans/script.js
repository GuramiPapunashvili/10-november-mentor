const myForm = document.querySelector('form')

myForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const loaned = document.getElementById('amount_loaned').value;
    const loanedFor = document.getElementById('months').value;
    const total = document.getElementById('total');
    const perMonth = document.getElementById('per_month');

    total.innerHTML = Number(loaned) + (Number(loaned) / 100 * 14)
    perMonth.innerHTML = Number(total.innerHTML) / Number(loanedFor)
})