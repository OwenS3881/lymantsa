document.querySelector(".officers-hidden-wrapper").classList.add("hidden");

window.onload = function()
{
    document.querySelector(".officer-login-form").addEventListener("submit", function(event)
    {      
        event.preventDefault();
        
        if (checkPassword())
        {
            document.querySelector(".officers-hidden-wrapper").classList.add("hidden");
        }
    });
}

function checkPassword()
{
    const enteredPassword = document.querySelector(".officers-password-input").value;

    console.log(enteredPassword);

    const request = new XMLHttpRequest();
    request.open("POST", "../checkpassword.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            return request.responseText == "True";      
        }
    }
    request.send("password=" + enteredPassword);
}