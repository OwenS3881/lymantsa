(function() {
    emailjs.init('WYHv9GY3JGp-GkDOQ');
})();

document.querySelector(".email-form").addEventListener("submit", sendID)

function sendID()
{
    const params =
    {
        type: "Join",
        field_1: document.querySelector(".email-input").value,
        field_2: "N/A",
        field_3: "N/A"
    }
    emailjs.send("service_wmvvg3l","template_blht2yf", params).then(function (res)
    {
        alert("Success!");
    });

}