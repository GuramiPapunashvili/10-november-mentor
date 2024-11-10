const myForm = document.querySelector("form")

myForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const username = document.getElementById('Name').value
    const Email = document.getElementById('Email').value;
    const Password = document.getElementById('Password').value
    const Confirm_Password = document.getElementById('Confirm_Password').value

    const user = []
    if(Password === Confirm_Password){
        user.push(username)
        user.push(Password)
        user.push(Email)
        user.push(Confirm_Password)
        localStorage.setItem('userinfo', JSON.stringify(user))
    }

    window.location.href = "file:///C:/Users/admin/Desktop/November%2010th,%20mentor's%20test/Login/index.html"

})


