hidePanel();

window.onload = function()
{
    document.querySelector(".officer-login-form").addEventListener("submit", function(event)
    {      
        event.preventDefault();
        
        checkPassword();
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
            if (request.responseText === "True")
            {
                unlockPanel();
            }
            else
            {
                hidePanel();
                alert("Access Denied");
            }
        }
    }
    request.send("password=" + enteredPassword);
}

function unlockPanel()
{
    document.querySelector(".officers-hidden-wrapper").classList.remove("hidden");
}

function hidePanel()
{
    document.querySelector(".officers-hidden-wrapper").classList.add("hidden");
}