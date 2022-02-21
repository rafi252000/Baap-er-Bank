document.getElementById('login-submit').addEventListener('click',function(){
    // get user email
    const emailField=document.getElementById('user-email');
    const userEmail=emailField.value;
    // emailField.value=''; 

    // get password
    const passwordField=document.getElementById('user-password');
    const userPassword=passwordField.value;
    passwordField.value='';

    //chack email and password 
    if(userEmail=='rafi@gmail.com' && userPassword=='01816rafi'){
        console.log('valid user')
        window.location.href=('banking.html')
    }
})

