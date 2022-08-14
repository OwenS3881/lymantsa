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
    new Event("First Meeting", new Date(2022, 7, 22), "Ms. Acken's Room, 06-039", "<strong>Highly recommended for all members.</strong> We will be going over important information regarding TSA including what TSA is, for new members, and some important changes for all members"),

    new Event("Leadership Conference", new Date(2022, 9, 19), "Altamonte Springs Hilton", "Open to all members - not just leadership. <strong>Leadership members required to attend.</strong> NOTE: if you are a member of leadership, confirmation of your ability to attend will be required prior to the first TSA meeting of the 2022-2023 school year. If unable to attend, the position may potentially be filled by a TSA member/candidate who is able to attend and will then fill the position for the school year. The event starts on the 19th and ends on the 22nd"),

    new Event("Regional Competition", new Date(2022, 11, 3), "Palm Bay High School", "One day event - not all competitions are included - all members are highly encouraged to attend, however, this is not a requirement to be a member of the TSA club"),

    new Event("2023 State Conference and Competition", new Date(2023, 1, 22), "Orlando Universal DoubleTree", "<strong>Attendance to to this 3 day event is required as a member of TSA</strong> - all members will be required to compete in a minimum of 2 events and a maximum of 6. The event starts on the 22nd and ends on the 25th"),

    new Event("2023 National TSA Conference", new Date(2023, 5, 28), "Louisville, Kentucky", "Attendance is optional. This event starts on June 28th and ends on July 2nd"),
];
//-------------------------------------------------

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
const container = document.querySelector(".schedule-content-container");

for (const event of events) 
{
    const date = event.getDate();

    if (typeof date != "object") 
    {
        continue;
    }

    if (date.getTime() + 86400000 < Date.now())
    {
        continue;
    }

    const newEvent = templateEvent.cloneNode(true);
    container.appendChild(newEvent);

    newEvent.querySelector(".event-name").innerHTML = event.getName();
    newEvent.querySelector(".event-date").innerHTML = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    newEvent.querySelector(".event-location").innerHTML = event.getLocation();
    newEvent.querySelector(".event-description").innerHTML = event.getDescription();
}

templateEvent.remove();