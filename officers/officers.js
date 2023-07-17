window.onload = function()
{
    document.querySelector(".officer-login-form").addEventListener("submit", function(event)
    {      
        //event.preventDefault();
        
        checkPassword();
    });
}

function checkPassword()
{
    const enteredPassword = document.querySelector(".officers-password-input").value;

    const request = new XMLHttpRequest();
    request.open("POST", "../checkpassword.php")
}