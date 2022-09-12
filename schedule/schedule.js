//Schedule

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

request.open("GET", "schedule.php");
request.send();

function toHyperlink(str)
{    
    var pattern1 = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    var str1 = str.replace(pattern1, "<a href='$1'>$1</a>");
    
    var pattern2 =/(^|[^\/])(www\.[\S]+(\b|$))/gim;
    var str2 = str1.replace(pattern2, '$1<a target="_blank" href="http://$2">$2</a>');
    
    return str2;
}

const upcomingContainer = document.querySelector("#upcoming-events-container");
const pastContainer = document.querySelector("#past-events-container");

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
            return 1;
        }

        if (first.getDate().getTime() > second.getDate().getTime())
        {
            return 1;
        }

        if (first.getDate().getTime() < second.getDate().getTime())
        {
            return -1;
        }

        return 0;
    });

    const templateEvent = document.querySelector(".event-box");

    for (const event of events) 
    {
        const date = event.getDate();

        if (typeof date != "object") 
        {
            continue;
        } 

        const newEvent = templateEvent.cloneNode(true);

        if (date.getTime() < Date.now())
        {
            pastContainer.appendChild(newEvent);
        }
        else
        {
            upcomingContainer.appendChild(newEvent);

            if (event.getType() == "IMPORTANT")
            {
                newEvent.querySelector(".event-name").classList.add("important");
            }
        }

        newEvent.querySelector(".event-name").innerHTML = event.getName();
        newEvent.querySelector(".event-date").innerHTML = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        newEvent.querySelector(".event-location").innerHTML = event.getLocation();
        newEvent.querySelector(".event-description").innerHTML = toHyperlink(event.getDescription());   

        newEvent.classList.add("reveal");
    }

    templateEvent.remove();

    reveal(".reveal");
}

//Time switch
const upcomingButton = document.querySelector("#schedule-time-upcoming-button");
const pastButton = document.querySelector("#schedule-time-past-button");

upcomingButton.addEventListener("click", function()
{
    upcomingButton.classList.add("selected");
    pastButton.classList.remove("selected");

    upcomingContainer.classList.remove("hidden");
    pastContainer.classList.add("hidden");

    reveal(".reveal");
});

pastButton.addEventListener("click", function()
{
    pastButton.classList.add("selected");
    upcomingButton.classList.remove("selected");

    pastContainer.classList.remove("hidden");
    upcomingContainer.classList.add("hidden");

    reveal(".reveal");
});