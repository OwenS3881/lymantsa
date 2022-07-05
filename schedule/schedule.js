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
    new Event("First Meeting", "TBA", "TBA", "TBA"),

    new Event("Leadership Conference", "10/19/22 - 10/22/22", "Altamonte Springs Hilton", "Open to all members - not just leadership. <strong>Leadership members required to attend.</strong> NOTE: if you are a member of leadership, confirmation of your ability to attend will be required prior to the first TSA meeting of the 2022-2023 school year. If unable to attend, the position may potentially be filled by a TSA member/candidate who is able to attend and will then fill the position for the school year"),

    new Event("Regional Competition", "12/3/22", "Palm Bay High School", "One day event - not all competitions are included - all members are highly encouraged to attend, however, this is not a requirement to be a member of the TSA club"),

    new Event("2023 State Conference and Competition", "2/22/23 - 2/25/23", "Orlando Universal DoubleTree", "<strong>Attendance to to this 3 day event is required as a member of TSA</strong> - all members will be required to compete in a minimum of 2 events and a maximum of 6"),

    new Event("2023 National TSA Conference", "6/28/23 - 7/2/23", "Louisville, Kentucky", ""),
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