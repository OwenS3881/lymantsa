(function() {
    emailjs.init('WYHv9GY3JGp-GkDOQ');
})();

window.onload = function()
{
    document.querySelector(".email-form").addEventListener("submit", function(event)
    {      
        event.preventDefault();
        
        const params =
        {
            type: "Join",
            field_1: "ID: " + document.querySelector(".email-input").value,
            field_2: "Name: " + document.querySelector(".join-name-input").value,
            field_3: "N/A"
        }
        emailjs.send("service_wmvvg3l","template_blht2yf", params).then(function (res)
        {
            alert("Success!");
        });
    });
}