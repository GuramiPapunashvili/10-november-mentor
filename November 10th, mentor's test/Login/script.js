const myForm = document.querySelector("form")

myForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const username = document.getElementById('Name').value
    const Email = document.getElementById('Email').value;
    const Password = document.getElementById('Password').value

    const userInfoFromStorage = JSON.parse(localStorage.getItem('userinfo'))

    for (let i = 0; i < userInfoFromStorage.length; i++){
        if(username === userInfoFromStorage[i]){
            if(Password === userInfoFromStorage[i+1]){
                window.location.href = "file:///C:/Users/admin/Desktop/November%2010th,%20mentor's%20test/Home/index.html"
            }
        }
    }

    // window.location.href = "file:///C:/Users/admin/Desktop/November%2010th,%20mentor's%20test/Login/index.html"
})


