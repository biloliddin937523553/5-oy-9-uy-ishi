

let person = {
    username: '123456',
    password: '78900'
}


let username = document.getElementById('username')
let password = document.getElementById('password')
let btn = document.querySelector('button')

btn.addEventListener('click' , (e)=>{
console.log(username.value);

if(username.value === person.username && password.value === person.password){
    alert('siz spacega muvaffaqiyatli kirdingiz')
}else{
    alert('id yoki parol hato')
}

username.value = ''
password.value = ''
})

