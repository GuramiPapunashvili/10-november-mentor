async function exchange(){
    try{
        const response = await fetch('https://v6.exchangerate-api.com/v6/6d30bca2e760a71330088af4/latest/USD');
        const info = await response.json();
        return info.conversion_rates;
    } catch(error){
        console.log(`Error: ${error}`)
        alert('There is an error please restart the page and try again')
    }
}

async function returnExchange(){
    const rates = await exchange();
    console.log(rates)
    return rates
}
const exchanged = returnExchange()
console.log(exchanged)
// console.log(returnExchange())

const convertFrom = document.getElementById('convertFrom')

document.getElementById('test').addEventListener('click', (e) =>{
    e.preventDefault();

    const test = exchanged.map((x) => x)
})

function extend_exchange(){
    window.location.href = "file:///C:/Users/admin/Desktop/November%2010th,%20mentor's%20test/Products/Currency_exchange/index.html"
}




//conversion_rates <-- the name of collection where the currencies at




// let conversions = null;
// fetch('https://v6.exchangerate-api.com/v6/6d30bca2e760a71330088af4/latest/USD')
// .then(response =>{
//     return response.json()
// })
// .then(info => {
//     conversions = info.conversion_rates
// })
// .catch(error =>{
//     console.log(`Error: ${error}`)
// })
