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
    new Announcement("a", "a/a/a", "aaaaaa"),
    new Announcement("Name", "Date", "Description")
];
//-------------------------------------------------

const templateAnnouncement = document.querySelector(".announcement-box");
const container = document.querySelector(".announcements-content-container");

for (const announcement of announcements) 
{
    const newAnnouncement = templateAnnouncement.cloneNode(true);
    container.appendChild(newAnnouncement);

    newAnnouncement.querySelector("h1").innerHTML = announcement.getName();
    newAnnouncement.querySelector("h3").innerHTML = announcement.getDate();
    newAnnouncement.querySelector("p").innerHTML = announcement.getDescription();
}

templateAnnouncement.remove();