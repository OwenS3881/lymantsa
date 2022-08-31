//Announcements

class Announcement
{
    constructor(name, date, description)
    {
        this.name = name;
        this.date = date;
        this.description = description;
    }

    getName() { return this.name; }
    getDate() { return this.date; }
    getDescription() { return this.description; }
}

//Add new announcements here
const announcements =
[
    new Announcement("Parent Meeting Tomorrow", new Date(2022, 7, 30), "Hey all, we are having an online parent meeting tomorrow 7:00 pm - 7:30 pm on MS Teams with your parents and the leadership team. Members are not required to attend but you should let your parents know. We have been emailing parents but if you missed the first meeting and/or didn't put your parent's email address on the spreadsheet, we can't contact them. Make sure to give your parents this link to attend: <a href='https://teams.live.com/meet/9386199220546'>https://teams.live.com/meet/9386199220546</a>"),

    new Announcement("Save the Dates", new Date(2022, 6, 2), "Mark your calendars - the Dates for the TSA  2022-2023 year are in! <br><br>10/19 - 22 Leadership Conference Altamonte Springs Hilton<br><br>(open to all members - not just leadership. Leadership members required to attend. NOTE: if you are a member of leadership, confirmation of your ability to attend will be required prior to the first TSA meeting of the 2022-2023 school year. If unable to attend, the position may potentially be filled by a TSA member/candidate who is able to attend and will then fill the position for the school year)<br><br>12/3 Regional Competition - Palm Bay High School<br><br>(one day event - not all competitions are included - all members are highly encouraged to attend, however, this is not a requirement to be a member of the TSA club)<br><br>2/22 - 2/25 State Conference and Competition - Orlando Universal DoubleTree<br><br>(attendance to to this 3 day event is required as a member of TSA - all members will be required to compete in a minimum of 2 events and a maximum of 6)<br><br>6/28 - 7/2 National TSA Conference - Louisville, Kentucky<br><br>And.... the summer conference of 2024 will be right here in ORLANDO!!!!!!<br><br>3 new competitions for next year. TSA will release more information when the new Competitive Events Guide comes out in early September:<br><br>1. SciVis will now be Virtual Reality<br> - students select their own device<br><br>2. Audio Podcasting<br>- students create a physical promotional item(s)<br><br>3. UAV Drone (Mr. Blizard will be the advisor for a Drone club at Lyman and this event will be incorporated with the club)<br>- open source<br>- student built, not prebuilt<br><br><hr><br><br>Hope you are having a wonderful summer!<br><br>-Heather"),

    new Announcement("First Meeting!", new Date(2022, 7, 14), "Our first TSA meeting will be held on Monday, August 22nd after school in Ms. Acken's Room (06-039) from 2:30 - 3:30 p.m. It is highly recommended that all members attend. Please spread the word to anyone who is in TSA or is interested in joining TSA, all are welcome!<br><br>"),

    new Announcement("Lyman Open House", new Date(2022, 7, 18), "Hey all, TSA is going to have a table at the upcoming Lyman Open House on <strong>Thursday, August 25th at 6 p.m.</strong> Come out and represent TSA and help us recruit new members! If you are interested in coming, email me (Owen Szymanski) at 158860@student.myscps.us."),
    
    new Announcement("Updates and Reminders", new Date(2022, 7, 22), "Hey everyone, I've got a few updates and reminders for you all. <br><br>Our second meeting is going to happen on September 6th now instead of the 5th because the 5th is Labor Day.<br><br>If you're planning on running for Historian you need to have your speech ready for the next meeting. It can't be longer than 2 minutes. Note: All officers are required to attend the leadership conference in October so please make sure you can make that before running.<br><br> Competition selection is now open! Please make sure to submit your selections before our third meeting (9/19). You can submit your selections on the Lyman TSA website at <a href='https://lymantsa.org/competitions/'>http://lymantsa.org/competitions/</a> <br><br> The updated meeting dates and the meeting notes from today's meeting can all be found on the schedule page of the Lyman TSA website <a href='http://lymantsa.org/schedule/'>http://lymantsa.org/schedule/</a>")
];
//-------------------------------------------------

announcements.sort(function (first, second)
{
    if (first.getDate().getTime() > second.getDate().getTime())
    {
        return -1;
    }

    if (first.getDate().getTime() < second.getDate().getTime())
    {
        return 1;
    }

    return 0;
});

const templateAnnouncement = document.querySelector(".announcement-box");
const container = document.querySelector(".announcements-content-container");

for (const announcement of announcements) 
{
    const newAnnouncement = templateAnnouncement.cloneNode(true);
    container.appendChild(newAnnouncement);

    const date = announcement.getDate();

    newAnnouncement.querySelector("h1").innerHTML = announcement.getName();
    newAnnouncement.querySelector("h3").innerHTML = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    newAnnouncement.querySelector("p").innerHTML = announcement.getDescription();
}

templateAnnouncement.remove();