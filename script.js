document.querySelector('form').addEventListener('submit' , (e)=>{
    e.preventDefault();
    let emailregex = /^[a-zA-Z0-9._@#%^!()]{3,25}@\w{2,5}\.\w{2,3}$/gi;
    let passwordregex = /^[a-zA-Z0-9._@#%^!()]{4,12}$/g; 
    let name = document.getElementById('name');
    let namespan = document.getElementById('name-span');
    let lastname = document.getElementById('lastname');
    let lastnamespan = document.getElementById('lastname-span');
    let email = document.getElementById('email');
    let emailspan = document.getElementById('email-span');
    let password = document.getElementById('password');
    let passwordspan = document.getElementById('password-span');
    let passwordre = document.getElementById('password-re');
    let passwordrespan = document.getElementById('password-re-span');
    let submitspan = document.getElementById('submit-span');
    let data = {};

    let senddata = true;
    const url = 'https://jsonplaceholder.typicode.com/users';

    if(name.value === ""){
        namespan.innerText = "please type your name";
        senddata = false;
    }else{
        data.name = name.value;
        namespan.innerText = "";
    }

    if(lastname.value === ""){
        lastnamespan.innerText = "please type your lastname";
        senddata = false;
    }else{
        data.lastname = lastname.value;
        lastnamespan.innerText = "";
    }

    if(email.value === "" || emailregex.test(email.value) === false){
        emailspan.innerText = "please type your valid email";
        senddata = false;
    }else{
        data.email = email.value;
        emailspan.innerText = "";
    }

    if(password.value === "" || passwordregex.test(password.value) === false){
        passwordspan.innerText = "please type your valid password";
        senddata = false;
    }else{
        data.password = password.value;
        passwordspan.innerText = "";
    }

    if(password.value !== passwordre.value){
        passwordrespan.innerText = "please repeat your password";
        senddata = false;
    }else{
        passwordrespan.innerText = "";
    }

    if(senddata){
        axios.post(url)
        .then(res =>{
            submitspan.innerText = "Your profile has been successfully registered";
        })
        .catch(err =>{
            submitspan.innerText = "Your profile was not regitered please try again";
        })
    }
})