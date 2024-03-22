// scripts.js

document.getElementById('createEvent').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('mainContent').innerHTML = '<h2>Create New Event</h2><form><label for="eventName">Event Name:</label><input type="text" id="eventName"><br><label for="eventDate">Event Date:</label><input type="date" id="eventDate"><br><button type="submit">Create Event</button></form>';
});

document.getElementById('viewEvents').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('mainContent').innerHTML = '<h2>Upcoming Events</h2><ul><li>Event 1 - Date</li><li>Event 2 - Date</li><li>Event 3 - Date</li></ul>';
});
