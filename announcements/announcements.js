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

const announcements = [];

//Access Database
const request = new XMLHttpRequest();
let rawAnnouncements = [];

request.onreadystatechange = function()
{
    if (request.readyState == 4 && request.status == 200)
    {
        console.log(request.responseText);
        rawAnnouncements = JSON.parse(request.responseText);
        updatePage();
    }
}

request.open("GET", "announcements.php");
request.send();

function updatePage()
{
    console.log(rawAnnouncements);

    for (const rawAnnouncement of rawAnnouncements) 
    {
        const newDate = new Date (rawAnnouncement.date);
        newDate.setDate(newDate.getDate() + 1);

        announcements.push(new Announcement(rawAnnouncement.name, newDate, rawAnnouncement.description));
    }

    console.log(announcements);

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

        newAnnouncement.classList.add("reveal");
    }

    templateAnnouncement.remove();

    reveal(".reveal");
}