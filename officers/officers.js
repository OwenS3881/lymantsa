hidePanel();

getJoinData();

let currentEditEventID = -1;
let currentDeleteEventID = -1;

let currentEditAnnouncementID = -1;
let currentDeleteAnnouncementID = -1;

//Assign buttons
window.onload = function()
{
    //Login
    document.querySelector(".officer-login-form").addEventListener("submit", function(event)
    {      
        event.preventDefault();
        
        checkPassword();
    });

    //Add event button
    document.querySelector(".add-event-form").addEventListener("submit", function(event)
    {
        event.preventDefault();

        addEvent();
    });

    //Edit event search button
    document.querySelector(".editsearch-event-form").addEventListener("submit", function(event)
    {
        event.preventDefault();

        getEventEdit();
    });

    //Edit event select button
    document.querySelector(".editsearch-event-select-button").addEventListener("click", function(event)
    {
        event.preventDefault();

        selectEditEvent();
    });

    //Edit event button
    document.querySelector(".edit-event-form").addEventListener("submit", function(event)
    {
        event.preventDefault();

        editEvent();
    });

    //Delete event search button
    document.querySelector(".remove-event-form").addEventListener("submit", function(event)
    {
        event.preventDefault();

        getEventDelete();
    });

    //Delete event button
    document.querySelector(".remove-event-button").addEventListener("click", function(event)
    {
        event.preventDefault();

        deleteEvent();
    });

    //Add announcement button
    document.querySelector(".add-announcement-form").addEventListener("submit", function(event)
    {
        event.preventDefault();

        addAnnouncement();
    });

    //Edit announcement search button
    document.querySelector(".editsearch-announcement-form").addEventListener("submit", function(event)
    {
        event.preventDefault();

        getAnnouncementEdit();
    });

    //Edit announcement select button
    document.querySelector(".editsearch-announcement-select-button").addEventListener("click", function(event)
    {
        event.preventDefault();

        selectEditAnnouncement();
    });

    //Edit announcement button
    document.querySelector(".edit-announcement-form").addEventListener("submit", function(event)
    {
        event.preventDefault();

        editAnnouncement();
    });

    //Delete announcement search button
    document.querySelector(".remove-announcement-form").addEventListener("submit", function(event)
    {
        event.preventDefault();

        getAnnouncementDelete();
    });

    //Delete announcement button
    document.querySelector(".remove-announcement-button").addEventListener("click", function(event)
    {
        event.preventDefault();

        deleteAnnouncement();
    });
}

function getEneteredPassword()
{
    return document.querySelector(".officers-password-input").value;
}

function getDate(dateField)
{
    const root = document.querySelector(dateField);

    const year = root.querySelector(".date-select-year").value;
    const day = root.querySelector(".date-select-day").value;
    const month = root.querySelector(".date-select-month").value;

    return year + "-" + month + "-" + day;
}

function setDate(dateField, date)
{
    const root = document.querySelector(dateField);

    root.querySelector(".date-select-year").value = date[0];
    root.querySelector(".date-select-month").value = date[1];
    root.querySelector(".date-select-day").value = date[2];
}

function resetDate(dateField)
{
    const root = document.querySelector(dateField);

    root.querySelector(".date-select-year").value = "2022";
    root.querySelector(".date-select-month").value = "01";
    root.querySelector(".date-select-day").value = "01";
}

function newlineToBr(text)
{
    return text.replace(/\n/g, "<br>");
}

function brToNewline(text)
{
    return text.replace(/<br>/g, "\n");
}

//verify if password is correct
function checkPassword()
{
    const enteredPassword = getEneteredPassword();

    console.log(enteredPassword);

    const request = new XMLHttpRequest();
    request.open("POST", "../checkpassword.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            if (request.responseText === "True")
            {
                unlockPanel();
            }
            else
            {
                hidePanel();
                alert("Access Denied");
            }
        }
    }
    request.send("password=" + enteredPassword);
}

function unlockPanel()
{
    document.querySelector(".officers-hidden-wrapper").classList.remove("hidden");
}

function hidePanel()
{
    document.querySelector(".officers-hidden-wrapper").classList.add("hidden");
}

function addEvent()
{
    const title = document.querySelector(".add-event-title").value;
    const date = getDate(".add-event-date");
    const details = document.querySelector(".add-event-details").value;
    const description = document.querySelector(".add-event-description").value;

    if (title.length <= 0 || details.length <= 0 || description.length <= 0)
    {
        alert("Please fill all fields");
        return;
    }

    const fixedDescription = newlineToBr(description);

    console.log(fixedDescription);

    const enteredPassword = getEneteredPassword();

    const request = new XMLHttpRequest();
    request.open("POST", "../addevent_secure.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            alert(request.responseText);
            document.querySelector(".add-event-title").value = "";
            resetDate(".add-event-date");
            document.querySelector(".add-event-details").value = "";
            document.querySelector(".add-event-description").value = "";
        }
    }
    request.send("password=" + enteredPassword + "&name=" + title + "&date=" + date + "&location=" + details + "&description=" + fixedDescription);
}

function getEventEdit()
{
    const search = document.querySelector(".editsearch-event-prompt").value;

    if (search.length <= 0)
    {
        alert("Please fill all fields");
        return;
    }

    const request = new XMLHttpRequest();
    request.open("POST", "../getevent.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            const rawResult = request.responseText;

            if (rawResult == "No Results")
            {
                alert("No event found");
                return;
            }

            const arr = rawResult.split("^");

            currentEditEventID = parseInt(arr[0]);
            const title = arr[1];
            const date = arr[2];
            const details = arr[3];
            const description = arr[4];

            document.querySelector(".officers-search-event-title").querySelector("p").innerHTML = title;
            document.querySelector(".officers-search-event-date").querySelector("p").innerHTML = date;
            document.querySelector(".officers-search-event-details").querySelector("p").innerHTML = details;
            document.querySelector(".officers-search-event-description").querySelector("p").innerHTML = description;

            document.querySelector(".officers-search-event-results").classList.remove("hidden");
        }
    }
    request.send("search=" + search);
}

function selectEditEvent()
{
    //Get event info
    const title = document.querySelector(".officers-search-event-title").querySelector("p").innerHTML;
    const date = document.querySelector(".officers-search-event-date").querySelector("p").innerHTML.split("-");
    const details = document.querySelector(".officers-search-event-details").querySelector("p").innerHTML;
    const description = document.querySelector(".officers-search-event-description").querySelector("p").innerHTML;

    //Set event info
    document.querySelector(".edit-event-title").value = title;
    setDate(".edit-event-date", date);
    document.querySelector(".edit-event-details").value = details;
    document.querySelector(".edit-event-description").value = brToNewline(description);

    //Hide and show
    document.querySelector(".officers-event-alter-search").classList.add("hidden");
    document.querySelector(".officers-search-event-results").classList.add("hidden");
    document.querySelector(".officers-event-panel-edit").classList.remove("hidden");
}

function editEvent()
{
    const title = document.querySelector(".edit-event-title").value;
    const date = getDate(".edit-event-date");
    const details = document.querySelector(".edit-event-details").value;
    const description = document.querySelector(".edit-event-description").value;

    if (title.length <= 0 || details.length <= 0 || description.length <= 0)
    {
        alert("Please fill all fields");
        return;
    }

    const fixedDescription = newlineToBr(description);

    console.log(fixedDescription);

    const enteredPassword = getEneteredPassword();

    const request = new XMLHttpRequest();
    request.open("POST", "../alterevent_secure.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            alert(request.responseText);
            currentEditEventID = -1;

            document.querySelector(".officers-event-alter-search").classList.remove("hidden");
            document.querySelector(".officers-event-panel-edit").classList.add("hidden");

            document.querySelector(".editsearch-event-prompt").value = "";
        }
    }
    request.send("password=" + enteredPassword + "&id=" + currentEditEventID + "&name=" + title + "&date=" + date + "&location=" + details + "&description=" + fixedDescription); 
}

function getEventDelete()
{
    const search = document.querySelector(".remove-event-prompt").value;

    if (search.length <= 0)
    {
        alert("Please fill all fields");
        return;
    }

    const request = new XMLHttpRequest();
    request.open("POST", "../getevent.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            const rawResult = request.responseText;

            if (rawResult == "No Results")
            {
                alert("No event found");
                return;
            }

            const arr = rawResult.split("^");

            currentDeleteEventID = parseInt(arr[0]);
            const title = arr[1];
            const date = arr[2];
            const details = arr[3];
            const description = arr[4];

            document.querySelector(".officers-remove-event-title").querySelector("p").innerHTML = title;
            document.querySelector(".officers-remove-event-date").querySelector("p").innerHTML = date;
            document.querySelector(".officers-remove-event-details").querySelector("p").innerHTML = details;
            document.querySelector(".officers-remove-event-description").querySelector("p").innerHTML = description;

            document.querySelector(".officers-remove-event-results").classList.remove("hidden");
        }
    }
    request.send("search=" + search);
}

function deleteEvent()
{
    const enteredPassword = getEneteredPassword();

    const request = new XMLHttpRequest();
    request.open("POST", "../delete_event_secure.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            alert(request.responseText);
            currentDeleteEventID = -1;

            document.querySelector(".officers-remove-event-results").classList.add("hidden");

            document.querySelector(".remove-event-prompt").value = "";
        }
    }
    request.send("password=" + enteredPassword + "&id=" + currentDeleteEventID); 
}

function addAnnouncement()
{
    const title = document.querySelector(".add-announcement-title").value;
    const date = getDate(".add-announcement-date");
    const description = document.querySelector(".add-announcement-description").value;

    if (title.length <= 0 || description.length <= 0)
    {
        alert("Please fill all fields");
        return;
    }

    const fixedDescription = newlineToBr(description);

    console.log(fixedDescription);

    const enteredPassword = getEneteredPassword();

    const request = new XMLHttpRequest();
    request.open("POST", "../addannouncement_secure.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            alert(request.responseText);
            document.querySelector(".add-announcement-title").value = "";
            resetDate(".add-announcement-date");
            document.querySelector(".add-announcement-description").value = "";
        }
    }
    request.send("password=" + enteredPassword + "&name=" + title + "&date=" + date + "&description=" + fixedDescription);
}

function getAnnouncementEdit()
{
    const search = document.querySelector(".editsearch-announcement-prompt").value;

    if (search.length <= 0)
    {
        alert("Please fill all fields");
        return;
    }

    const request = new XMLHttpRequest();
    request.open("POST", "../getannouncement.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            const rawResult = request.responseText;

            if (rawResult == "No Results")
            {
                alert("No announcement found");
                return;
            }

            const arr = rawResult.split("^");

            currentEditAnnouncementID = parseInt(arr[0]);
            const title = arr[1];
            const date = arr[2];
            const description = arr[3];

            document.querySelector(".officers-search-announcement-title").querySelector("p").innerHTML = title;
            document.querySelector(".officers-search-announcement-date").querySelector("p").innerHTML = date;
            document.querySelector(".officers-search-announcement-description").querySelector("p").innerHTML = description;

            document.querySelector(".officers-search-announcement-results").classList.remove("hidden");
        }
    }
    request.send("search=" + search);
}

function selectEditAnnouncement()
{
    //Get announcement info
    const title = document.querySelector(".officers-search-announcement-title").querySelector("p").innerHTML;
    const date = document.querySelector(".officers-search-announcement-date").querySelector("p").innerHTML.split("-");
    const description = document.querySelector(".officers-search-announcement-description").querySelector("p").innerHTML;

    //Set announcement info
    document.querySelector(".edit-announcement-title").value = title;
    setDate(".edit-announcement-date", date);
    document.querySelector(".edit-announcement-description").value = brToNewline(description);

    //Hide and show
    document.querySelector(".officers-announcement-alter-search").classList.add("hidden");
    document.querySelector(".officers-search-announcement-results").classList.add("hidden");
    document.querySelector(".officers-announcement-panel-edit").classList.remove("hidden");
}

function editAnnouncement()
{
    const title = document.querySelector(".edit-announcement-title").value;
    const date = getDate(".edit-announcement-date");
    const description = document.querySelector(".edit-announcement-description").value;

    if (title.length <= 0 || description.length <= 0)
    {
        alert("Please fill all fields");
        return;
    }

    const fixedDescription = newlineToBr(description);

    console.log(fixedDescription);

    const enteredPassword = getEneteredPassword();

    const request = new XMLHttpRequest();
    request.open("POST", "../alterannouncement_secure.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            alert(request.responseText);
            currentEditAnnouncementID = -1;

            document.querySelector(".officers-announcement-alter-search").classList.remove("hidden");
            document.querySelector(".officers-announcement-panel-edit").classList.add("hidden");

            document.querySelector(".editsearch-announcement-prompt").value = "";
        }
    }
    request.send("password=" + enteredPassword + "&id=" + currentEditAnnouncementID + "&name=" + title + "&date=" + date + "&description=" + fixedDescription); 
}

function getAnnouncementDelete()
{
    const search = document.querySelector(".remove-announcement-prompt").value;

    if (search.length <= 0)
    {
        alert("Please fill all fields");
        return;
    }

    const request = new XMLHttpRequest();
    request.open("POST", "../getannouncement.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            const rawResult = request.responseText;

            if (rawResult == "No Results")
            {
                alert("No announcement found");
                return;
            }

            const arr = rawResult.split("^");

            currentDeleteAnnouncementID = parseInt(arr[0]);
            const title = arr[1];
            const date = arr[2];
            const description = arr[3];

            document.querySelector(".officers-remove-announcement-title").querySelector("p").innerHTML = title;
            document.querySelector(".officers-remove-announcement-date").querySelector("p").innerHTML = date;
            document.querySelector(".officers-remove-announcement-description").querySelector("p").innerHTML = description;

            document.querySelector(".officers-remove-announcement-results").classList.remove("hidden");
        }
    }
    request.send("search=" + search);
}

function deleteAnnouncement()
{
    const enteredPassword = getEneteredPassword();

    const request = new XMLHttpRequest();
    request.open("POST", "../deleteannouncement_secure.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            alert(request.responseText);
            currentDeleteAnnouncementID = -1;

            document.querySelector(".officers-remove-announcement-results").classList.add("hidden");

            document.querySelector(".remove-announcement-prompt").value = "";
        }
    }
    request.send("password=" + enteredPassword + "&id=" + currentDeleteAnnouncementID); 
}

function getJoinData()
{
    const request = new XMLHttpRequest();
    request.open("GET", "../getjoin.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            const data = JSON.parse(request.responseText);
            console.log(data);

            const container = document.querySelector(".officers-join-data");

            const templateEntry = document.querySelector(".officers-join-data-entry");

            for (const entry of data)
            {
                const newEntry = templateEntry.cloneNode(true);

                container.appendChild(newEntry);

                newEntry.querySelector(".officers-join-data-entry-name").innerHTML = entry.name;
                newEntry.querySelector(".officers-join-data-entry-id").innerHTML = entry.studentId;
            }

            templateEntry.remove();
        }
    }
    request.send(); 
}