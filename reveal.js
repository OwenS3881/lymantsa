reveal(".reveal");

window.addEventListener("scroll", function()
{
    reveal(".reveal");
});


function reveal(className)
{
    var reveals = document.querySelectorAll(className);

    for (let i = 0; i < reveals.length; i++)
    {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible)
        {
            reveals[i].classList.add("active");
        }
    }
}