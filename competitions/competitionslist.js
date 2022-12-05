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
            "Bruce Salas",
            "Jada Taylor",
            "Madisen Xavier",
            "Emit Rice",
            "Nathan Hinkle",
            "Brayden McMichael",
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
            "Samantha Proulx",
            "Abigail Dominica",
            "Asma Sanaullah",
            "Emily Henderson",
        ]
    ),
    new ListItem
    (
        "Board Game Design",
        6,
        [
            "Joshua Rowen",
            "Dawson Reeves",
            "Abigail Dominica",
            "Alana Negron",
            "Jada Taylor",
            "Madisen Xavier",
        ]
    ),
    new ListItem
    (
        "Chapter Team",
        6,
        [
            "Dawson Reeves",
            "Emily Henderson",
            "Joshua Rowen",
            "Samantha Proulx",
            "Abigail Dominica",
            "Catherine Kong",
        ]
    ),
    new ListItem
    (
        "Children's Stories",
        6,
        [
            "Dawson Reeves",
            "Alissa Hardesty",
            "Abigail Dominica",
            "Emily Henderson",
            "Emma Esteban",
            "Zack Gordon",
        ]
    ),
    new ListItem
    (
        "Coding",
        2,
        [
            "Joshua Evenden-Wallick",
            "Owen Szymanski",
        ]
    ),
    new ListItem
    (
        "Computer-Aided Design (CAD), Architecture",
        2,
        [
            "Connor McCarthy",
            "Nathan Hinkle",
        ]
    ),
    new ListItem
    (
        "Computer-Aided Design (CAD), Engineering",
        2,
        [
            "Val Rojas",
            "Neil Mathews",
        ]
    ),
    new ListItem
    (
        "Data Science and Analytics",
        2,
        [
            "Alex Salzano"
        ]
    ),
    new ListItem
    (
        "Debating Technological Issues",
        2,
        [
            "Samantha Proulx",
            "Zack Gordon",
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
            "Warner Ducheine",
            "Chad Brown",
        ]
    ),
    new ListItem
    (
        "Drone Challenge UAV",
        6,
        [
            "Joshua Evenden-Wallick",
            "Joshua Brevoort",
            "Jacob Henderson",
            "Emit Rice",
            "Lance Harmon",
            "Alex Salzano",
        ]
    ),
    new ListItem
    (
        "Engineering Design",
        8,
        [
            "Samantha Proulx",
            "Joshua Rowen",
            "Alex Salzano",
            "Story Salonek-Hays",
            "Logan Weil",
            "Connor McCarthy",
            "Brayden McMichael",
        ]
    ),
    new ListItem
    (
        "Essays on Technology",
        1,
        [
            "Zack Gordon",
        ]
    ),
    new ListItem
    (
        "Extemperaneous Speech",
        1,
        [
            "Dylan McCarthy",
        ]
    ),
    new ListItem
    (
        "Fashion Design and Technology",
        4,
        [
            "Abigail Dominica",
            "Alana Negron",
            "Emily Henderson",
            "Story Salonek-Hays",
        ]
    ),
    new ListItem
    (
        "Flight Endurance",
        2,
        [
            "Val Rojas",
            "Timo Horn-Domonkos",
        ]
    ),
    new ListItem
    (
        "Forensic Science",
        2,
        [
            "Joshua Rowen",
            "Dawson Reeves",
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
            "Warner Ducheine",
            "Bruce Salas",
            "Chad Brown",
            "Nickholas Singh",
            "Neil Mathews",
            "Elliott McGowan",
        ]
    ),
    new ListItem
    (
        "Photographic Technology",
        1,
        [
            "Story Salonek-Hays",
        ]
    ),
    new ListItem
    (
        "Prepared Presentation",
        1,
        [
            "Dylan McCarthy",
        ]
    ),
    new ListItem
    (
        "Promotional Design",
        1,
        [
            "Emit Rice",
        ]
    ),
    new ListItem
    (
        "Senior Solar Sprint",
        4,
        [
            "Chad Brown",
            "Alana Negron",
            "Alex Salzano",
            "Michael McKnight",
        ]
    ),
    new ListItem
    (
        "Software Development",
        6,
        [
            "Owen Szymanski",
            "Abhay Narayan",
            "Catherine Kong",
            "Logan Weil",
            "Joshua Evenden-Wallick",
            "Connor McCarthy",
        ]
    ),
    new ListItem
    (
        "Structural Design and Engineering",
        2,
        [
            "Bruce Salas",
        ]
    ),
    new ListItem
    (
        "System Control Technology",
        3,
        [
            "Robert Torres",
        ]
    ),
    new ListItem
    (
        "Technology Bowl",
        3,
        [
            "Nickholas Singh",
            "Lance Harmon",
            "Dylan McCarthy",
        ]
    ),
    new ListItem
    (
        "Technology Problem Solving",
        2,
        [
            "Lance Harmon",
            "Neil Mathews",
        ]
    ),
    new ListItem
    (
        "Transportation Modeling",
        1,
        [
            "Brayden McMichael",
        ]
    ),
    /*
    new ListItem
    (
        "VEX Robotics Competition",
        6,
        [
            "Alex Salzano",
            "Robert Torres",
            "Catherine Kong",
        ]
    ),
    */
    new ListItem
    (
        "Video Game Design",
        6,
        [
            "Owen Szymanski",
            "Robert Torres",
            "Catherine Kong",
            "Joshua Evenden-Wallick",
            "Emit Rice",
            "Joshua Brevoort",
        ]
    ),
    new ListItem
    (
        "Virtual Reality",
        6,
        [
            "Joshua Brevoort",
            "Robert Torres",
            "Brayden McMichael",
        ]
    ),
    new ListItem
    (
        "Webmaster",
        6,
        [
            "Owen Szymanski",
            "Val Rojas",
            "Abhay Narayan",
            "Catherine Kong",
            "Joshua Evenden-Wallick",
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