function showHomePage() {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('profilePage').style.display = 'none';
    document.getElementById('eventsPage').style.display = 'none';
    document.getElementById('helpPage').style.display = 'none';
}

function showProfile() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('profilePage').style.display = 'block';
    document.getElementById('eventsPage').style.display = 'none';
    document.getElementById('helpPage').style.display = 'none';
}

function showEvents() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('profilePage').style.display = 'none';
    document.getElementById('eventsPage').style.display = 'block';
    document.getElementById('helpPage').style.display = 'none';
}

function showHelp() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('profilePage').style.display = 'none';
    document.getElementById('eventsPage').style.display = 'none';
    document.getElementById('helpPage').style.display = 'block';
};

