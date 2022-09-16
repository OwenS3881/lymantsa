//Data
class ListItem
{
    constructor(eventName, max, participants)
    {
        this.eventName = eventName;
        this.max = max;
        this.participants = participants;
    }

    getEventName() {return this.eventName;}
    getMax() {return this.max;}
    getParticipants() {return this.participants;}
}

const data =
[
    new ListItem
    (
        "Animatronics",
        3,
        [
            
        ]
    ),
    new ListItem
    (
        "Architectural Design",
        6,
        [
            
        ]
    ),
    new ListItem
    (
        "Audio Podcasting",
        6,
        [
            
        ]
    ),
    new ListItem
    (
        "Biotechnology Design",
        6,
        [
            
        ]
    ),
    new ListItem
    (
        "Board Game Design",
        6,
        [
            
        ]
    ),
    new ListItem
    (
        "Chapter Team",
        6,
        [
            
        ]
    ),
    new ListItem
    (
        "Children's Stories",
        6,
        [
            
        ]
    ),
    new ListItem
    (
        "Coding",
        2,
        [
            
        ]
    ),
    new ListItem
    (
        "Computer-Aided Design (CAD), Architecture",
        2,
        [
            
        ]
    ),
    new ListItem
    (
        "Computer-Aided Design (CAD), Engineering",
        2,
        [
            
        ]
    ),
    new ListItem
    (
        "Data Science and Analytics",
        2,
        [
            
        ]
    ),
    new ListItem
    (
        "Debating Technological Issues",
        2,
        [
            
        ]
    ),
    new ListItem
    (
        "Digital Video Production",
        6,
        [
            
        ]
    ),
    new ListItem
    (
        "Dragster Design",
        2,
        [
            
        ]
    ),
    new ListItem
    (
        "Drone Challenge UAV",
        6,
        [
            
        ]
    ),
    new ListItem
    (
        "Engineering Design",
        6,
        [
            
        ]
    ),
    new ListItem
    (
        "Essays on Technology",
        1,
        [
            
        ]
    ),
    new ListItem
    (
        "Extemperaneous Speech",
        1,
        [
            
        ]
    ),
    new ListItem
    (
        "Fashion Design and Technology",
        4,
        [
            
        ]
    ),
    new ListItem
    (
        "Flight Endurance",
        2,
        [
            
        ]
    ),
    new ListItem
    (
        "Forensic Science",
        2,
        [
            
        ]
    ),
    new ListItem
    (
        "Future Technology Teacher",
        3,
        [
            
        ]
    ),
    new ListItem
    (
        "Geospatial Technology",
        3,
        [
            
        ]
    ),
    new ListItem
    (
        "Manufacturing Prototype",
        6,
        [
            
        ]
    ),
    new ListItem
    (
        "Music Production",
        6,
        [
            
        ]
    ),
    new ListItem
    (
        "On Demand Video",
        6,
        [
            
        ]
    ),
    new ListItem
    (
        "Photographic Technology",
        1,
        [
            
        ]
    ),
    new ListItem
    (
        "Prepared Presentation",
        1,
        [
            
        ]
    ),
    new ListItem
    (
        "Promotional Design",
        1,
        [
            
        ]
    ),
    new ListItem
    (
        "Senior Solar Sprint",
        4,
        [
            
        ]
    ),
    new ListItem
    (
        "Software Development",
        6,
        [
            
        ]
    ),
    new ListItem
    (
        "Structural Design and Engineering",
        2,
        [
            
        ]
    ),
    new ListItem
    (
        "System Control Technology",
        3,
        [
            
        ]
    ),
    new ListItem
    (
        "Technology Bowl",
        3,
        [
            
        ]
    ),
    new ListItem
    (
        "Technology Problem Solving",
        2,
        [
            
        ]
    ),
    new ListItem
    (
        "Transportation Modeling",
        1,
        [
            
        ]
    ),
    new ListItem
    (
        "VEX Robotics Competition",
        6,
        [
            
        ]
    ),
    new ListItem
    (
        "Video Game Design",
        6,
        [
            
        ]
    ),
    new ListItem
    (
        "Virtual Reality",
        6,
        [
            
        ]
    ),
    new ListItem
    (
        "Webmaster",
        6,
        [
            
        ]
    ),
];

//Create list items
const template = document.querySelector(".competition-list-item");
const container = document.querySelector(".competition-list-container");

for (const item of data) 
{
    const newItem = template.cloneNode(true);
    container.appendChild(newItem);

    newItem.querySelector(".competition-list-item-event-name").innerHTML = item.getEventName();

    newItem.querySelector(".competition-list-item-count").innerHTML = `Participants: ${item.getParticipants().length}/${item.getMax()}`;

    const names = newItem.querySelector(".competition-list-item-names");

    for (let i = 0; i < item.getParticipants().length; i++)
    {
        const node = document.createElement("li");
        node.innerHTML = item.getParticipants()[i];
        names.appendChild(node);
    }

    for (let i = 0; i < item.getMax() - item.getParticipants().length; i++)
    {
        const node = document.createElement("li");
        node.innerHTML = "OPEN SLOT";
        names.appendChild(node);
    }
}

template.remove();


//Assign button functions
const listItems = document.querySelectorAll(".competition-list-item");

for (const item of listItems) 
{
    const btn = item.querySelector(".competition-list-item-dropdown-button");
    const names = item.querySelector(".competition-list-item-names");

    btn.addEventListener("click", function()
    {
        btn.classList.toggle("active");
        names.classList.toggle("active");
    });
}