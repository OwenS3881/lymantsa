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

//Add new events here
const events =
[
    new Event("Parent Meeting", new Date(2022, 7, 31), "Online: MS Teams, 7:00 p.m. - 7:30 p.m.", "Online meeting between the parents of TSA members and the leadership team. TSA members are not required to attend but they should let their parents know. Parents will attend the meeting through MS Teams with the link: <a href='https://teams.live.com/meet/9386199220546'>https://teams.live.com/meet/9386199220546</a>"),

    new Event("First Meeting", new Date(2022, 7, 22), "Ms. Acken's Room, 06-039, 2:30 - 3:30 p.m.", "<strong>Highly recommended for all members.</strong> From 2:30 p.m. - 3:30 p.m. We will be going over important information regarding TSA. This includes what TSA is, future meeting dates, communication, conference dates, competition selections, and the upcoming special election.<br><br>Meeting Notes:<br><br>-Went over Parliamentary Procedure<br><br>-Introduction of officers<br><br>-Historian election will be occuring during our next meeting. Anyone is welcome to run. All you need is to show up to the next meeting and have a speech ready.<br><br>-Overview of what TSA is<br><br>-Future meeting dates (can be found on the schedule page)<br><br>-Join our GroupMe (can be found on the join page)<br><br>-We have a website (this one!)<br><br>-Conference dates (can be found on the schedule page)<br><br>-Competition selection: submit your selections before the thrid meeting (9/19) on the competitions page<br><br>-Overview of competitive events (can be found on the national site which can be found on the resources page of our site)<br><br>-Come help us at the Lyman Open House (more information on the announcements page)", "IMPORTANT"),

    new Event("Leadership Conference", new Date(2022, 9, 19), "Altamonte Springs Hilton", "Open to all members - not just leadership. <strong>Leadership members required to attend.</strong> NOTE: if you are a member of leadership, confirmation of your ability to attend will be required prior to the first TSA meeting of the 2022-2023 school year. If unable to attend, the position may potentially be filled by a TSA member/candidate who is able to attend and will then fill the position for the school year. The event starts on the 19th and ends on the 22nd"),

    new Event("Regional Competition", new Date(2022, 11, 3), "Palm Bay High School", "One day event - not all competitions are included - all members are highly encouraged to attend, however, this is not a requirement to be a member of the TSA club"),

    new Event("2023 State Conference and Competition", new Date(2023, 1, 22), "Orlando Universal DoubleTree", "<strong>Attendance to to this 3 day event is required as a member of TSA</strong> - all members will be required to compete in a minimum of 2 events and a maximum of 6. The event starts on the 22nd and ends on the 25th"),

    new Event("2023 National TSA Conference", new Date(2023, 5, 28), "Louisville, Kentucky", "Attendance is optional. This event starts on June 28th and ends on July 2nd"),

    new Event("General Meeting", new Date(2022, 8, 6), "Ms. Acken's Room (06-039), 2:30 - 3:30 p.m.", "To Be Announced"),

    new Event("General Meeting", new Date(2022, 8, 19), "Ms. Acken's Room (06-039), 2:30 - 3:30 p.m.", "To Be Announced"),

    new Event("General Meeting", new Date(2022, 9, 3), "Ms. Acken's Room (06-039), 2:30 - 3:30 p.m.", "To Be Announced"),

    new Event("General Meeting", new Date(2022, 9, 17), "Ms. Acken's Room (06-039), 2:30 - 3:30 p.m.", "To Be Announced"),

    new Event("General Meeting", new Date(2022, 10, 7), "Ms. Acken's Room (06-039), 2:30 - 3:30 p.m.", "To Be Announced"),

    new Event("General Meeting", new Date(2022, 10, 21), "Ms. Acken's Room (06-039), 2:30 - 3:30 p.m.", "To Be Announced"),

    new Event("General Meeting", new Date(2022, 11, 5), "Ms. Acken's Room (06-039), 2:30 - 3:30 p.m.", "To Be Announced"),

    new Event("General Meeting", new Date(2023, 0, 16), "Ms. Acken's Room (06-039), 2:30 - 3:30 p.m.", "To Be Announced"),

    new Event("General Meeting", new Date(2023, 1, 6), "Ms. Acken's Room (06-039), 2:30 - 3:30 p.m.", "To Be Announced"),

    new Event("General Meeting", new Date(2023, 1, 20), "Ms. Acken's Room (06-039), 2:30 - 3:30 p.m.", "To Be Announced"),

    new Event("General Meeting", new Date(2023, 2, 6), "Ms. Acken's Room (06-039), 2:30 - 3:30 p.m.", "To Be Announced"),

    new Event("General Meeting", new Date(2023, 2, 20), "Ms. Acken's Room (06-039), 2:30 - 3:30 p.m.", "To Be Announced"),

    new Event("General Meeting", new Date(2023, 3, 3), "Ms. Acken's Room (06-039), 2:30 - 3:30 p.m.", "To Be Announced"),

    new Event("General Meeting", new Date(2023, 3, 17), "Ms. Acken's Room (06-039), 2:30 - 3:30 p.m.", "To Be Announced"),

    new Event("General Meeting", new Date(2023, 4, 1), "Ms. Acken's Room (06-039), 2:30 - 3:30 p.m.", "To Be Announced"),

    new Event("General Meeting", new Date(2023, 4, 15), "Ms. Acken's Room (06-039), 2:30 - 3:30 p.m.", "To Be Announced"),
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

const upcomingContainer = document.querySelector("#upcoming-events-container");
const pastContainer = document.querySelector("#past-events-container");

for (const event of events) 
{
    const date = event.getDate();

    if (typeof date != "object") 
    {
        continue;
    } 

    const newEvent = templateEvent.cloneNode(true);

    if (date.getTime() + 86400000 < Date.now())
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
    newEvent.querySelector(".event-description").innerHTML = event.getDescription();   
}

templateEvent.remove();

//Time switch
const upcomingButton = document.querySelector("#schedule-time-upcoming-button");
const pastButton = document.querySelector("#schedule-time-past-button");

upcomingButton.addEventListener("click", function()
{
    upcomingButton.classList.add("selected");
    pastButton.classList.remove("selected");

    upcomingContainer.classList.remove("hidden");
    pastContainer.classList.add("hidden");
});

pastButton.addEventListener("click", function()
{
    pastButton.classList.add("selected");
    upcomingButton.classList.remove("selected");

    pastContainer.classList.remove("hidden");
    upcomingContainer.classList.add("hidden");
});