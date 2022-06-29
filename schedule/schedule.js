//Schedule

class Event
{
    constructor(name, date, location, description)
    {
        this.name = name;
        this.date = date;
        this.location = location;
        this.description = description;
    }

    getName() { return this.name; }
    getDate() { return this.date; }
    getLocation() { return this.location; }
    getDescription() { return this.description; }
}

//Add new events here
const events =
[
    new Event("a", "a/a/a", "a st.", "aaaaaa"),
    new Event("Name", "Date", "Location", "Description"),
];
//-------------------------------------------------

const templateEvent = document.querySelector(".event-box");
const container = document.querySelector(".schedule-content-container");

for (const event of events) 
{
    const newEvent = templateEvent.cloneNode(true);
    container.appendChild(newEvent);

    newEvent.querySelector(".event-name").innerHTML = event.getName();
    newEvent.querySelector(".event-date").innerHTML = event.getDate();
    newEvent.querySelector(".event-location").innerHTML = event.getLocation();
    newEvent.querySelector(".event-description").innerHTML = event.getDescription();
}

templateEvent.remove();