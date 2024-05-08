// Function to set cookie
function setCookie(cookieName, cookieValue, expirationDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Function to get cookie value by name
function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Function to delete cookie
function deleteCookie() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.reload(); // Reload page after deleting cookie
}

// Function to handle form submission
document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    var username = document.getElementById("username").value;
    setCookie("username", username, 30); // Set cookie with expiration of 30 days
    displayGreeting(username);
});

// Function to display greeting
function displayGreeting(username) {
    var greetingDiv = document.getElementById("greeting");
    var usernameFromCookie = getCookie("username");
    if (usernameFromCookie !== "") {
        greetingDiv.innerHTML = "Xin chào " + usernameFromCookie + "!";
    } else {
        greetingDiv.innerHTML = "";
    }
}

// Check if cookie exists on page load
window.onload = function() {
    displayGreeting();
};
