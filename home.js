class Event
{
    constructor(name, date, location, description, type="OTHER")
    {
        this.name = name;
        this.date = date;
        this.location = location;
        this.description = description;
        this.type = type;
    }

    getName() { return this.name; }
    getDate() { return this.date; }
    getLocation() { return this.location; }
    getDescription() { return this.description; }
    getType() { return this.type; }
}

const events = [];

//Access Database
const request = new XMLHttpRequest();
let rawEvents = [];

request.onreadystatechange = function()
{
    if (request.readyState == 4 && request.status == 200)
    {
        console.log(request.responseText);
        rawEvents = JSON.parse(request.responseText);
        updatePage();
    }
}

request.open("GET", "schedule/schedule.php");
request.send();

function updatePage()
{
    console.log(rawEvents);

    for (const rawEvent of rawEvents) 
    {
        if (rawEvent.invisible == 1) continue;

        const newDate = new Date (rawEvent.date);
        newDate.setDate(newDate.getDate() + 1);

        events.push(new Event(rawEvent.name, newDate, rawEvent.location, rawEvent.description, rawEvent.type));
    }

    console.log(events);

    events.sort(function (first, second)
    {
        if (typeof first.getDate() != "object" || typeof second.getDate() != "object")
        {
            return -1;
        }

        if (first.getDate().getTime() < second.getDate().getTime())
        {
            return -1;
        }

        if (first.getDate().getTime() > second.getDate().getTime())
        {
            return 1;
        }

        return 0;
    });

    console.log(events);
    
    let found = false;

    for (const event of events) 
    {
        if (found)
        {
            continue;
        }

        if (!event.getName().toLowerCase().includes("meeting"))
        {
            continue;
        }

        const date = event.getDate();

        if (typeof date != "object") 
        {
            continue;
        }

        if (date.getTime() < Date.now())
        {
            continue;
        }

        document.querySelector(".home-next-meeting-date").innerHTML = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        document.querySelector(".home-next-meeting-details").innerHTML = event.getLocation();

        found = true;
    }
}