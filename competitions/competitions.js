//Create event boxes

const competitions = 
[
    "Animatronics",
    "Architectural Design",
    "Audio Podcasting",
    "Biotechnology Design",
    "Board Game Design",
    "Chapter Team",
    "Children's Stories",
    "Coding",
    "Computer Integrated Manufacturing (CIM)",
    "Computer-Aided Design (CAD), Architecture",
    "Computer-Aided Design (CAD), Engineering",
    "Cybersecurity",
    "Data Science and Analytics",
    "Debating Technological Issues",
    "Digital Video Production",
    "Dragster Design",
    "Engineering Design",
    "Essays on Technology",
    "Extemporaneous Speech",
    "Fashion Design and Technology",
    "Flight Endurance",
    "Forensic Science",
    "Future Technology Teacher",
    "Geospatial Technology",
    "Music Production",
    "On Demand Video",
    "Photographic Technology",
    "Prepared Presentation",
    "Promotional Design",
    "Virtual Reality",
    "Software Development",
    "Structural Design and Engineering",
    "System Control Technology",
    "Technology Bowl",
    "Technology Problem Solving",
    "Transportation Modeling",
    "UAV Drone",
    "VEX Robotics Competition",
    "Video Game Design",
    "Webmaster",
];

const templateChoice = document.querySelector(".competition-choice-box");
const container = document.querySelector(".competitions-choices-container");

for (const comp of competitions) 
{
    const newComp = templateChoice.cloneNode(true);
    container.appendChild(newComp);

    newComp.querySelector("h4").innerHTML = comp;
}

templateChoice.remove();

//Set up buttons
const selectButtons = document.querySelectorAll(".button-competition-selected");

for (const btn of selectButtons) 
{
    btn.addEventListener("click", function ()
    {
        const parentBox = btn.parentElement.parentElement;

        if (selectedCount >= selectedMax && !parentBox.classList.contains("selected"))
        {
            alert(`You have already selected ${selectedMax} competitions. Either unselect a competition or make this event an alternate.`);
            return;
        }

        parentBox.classList.toggle("selected");
        parentBox.classList.remove("alternate");
        updateCount();
    });
}

const alternateButtons = document.querySelectorAll(".button-alternate-selected");

for (const btn of alternateButtons)
{
    btn.addEventListener("click", function ()
    {
        const parentBox = btn.parentElement.parentElement;

        if (alternateCount >= alternateMax && !parentBox.classList.contains("alternate"))
        {
            alert(`You have already selected ${alternateMax} alternates.`);
            return;
        }

        parentBox.classList.toggle("alternate");
        parentBox.classList.remove("selected");
        updateCount();
    });
}

//Update Count
let selectedCount = 0;
let alternateCount = 0;

let selectedEvents = "";
let alternateEvents = "";

const selectedMax = 6;
const alternateMax = 3;

updateCount();

function updateCount()
{
    const selectedText = document.querySelector(".competitions-selected-text");
    const alternateText = document.querySelector(".alternate-selected-text");

    const selectedUl = document.querySelector(".competitions-selected-ul");
    const alternateUl = document.querySelector(".alternate-selected-ul");

    const selectedElements = document.querySelectorAll(".selected");
    const alternateElements = document.querySelectorAll(".alternate");

    selectedText.innerHTML = `Competitions Selected: ${selectedElements.length}/${selectedMax}`;
    alternateText.innerHTML = `Alternate Events Selected: ${alternateElements.length}/${alternateMax}`;

    selectedCount = selectedElements.length;
    alternateCount = alternateElements.length;

    selectedEvents = "";
    selectedUl.innerHTML = "";
    for (const element of selectedElements)
    {
        const node = document.createElement("li");
        const textnode = document.createTextNode(element.querySelector("h4").textContent);
        node.appendChild(textnode);
        selectedUl.appendChild(node);

        selectedEvents += element.querySelector("h4").textContent + " ";
    }

    alternateUl.innerHTML = "";
    for (const element of alternateElements)
    {
        const node = document.createElement("li");
        const textnode = document.createTextNode(element.querySelector("h4").textContent);
        node.appendChild(textnode);
        alternateUl.appendChild(node);

        alternateEvents += element.querySelector("h4").textContent + " ";
    }
}

//Submit form
(function() {
    emailjs.init('WYHv9GY3JGp-GkDOQ');
})();

window.onload = function()
{
    document.querySelector(".competition-form").addEventListener("submit", function(event)
    {      
        event.preventDefault();
        
        const params =
        {
            type: "Competitions",
            field_1: `Name: ${document.querySelector(".name-input").value}`,
            field_2: `Competitions: ${selectedEvents}`,
            field_3: `Alternates: ${alternateEvents}`
        }
        emailjs.send("service_wmvvg3l","template_blht2yf", params).then(function (res)
        {
            alert("Success!");
        });
    });
}