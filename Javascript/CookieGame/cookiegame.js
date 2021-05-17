//creating the object
var cookie = {
    cookieType:"Chocolate Chop",
    cost: 0,
    count: 0,
    logMessage: "",
    purchaseID: 0
};

// showing number of clicks

function increaseCount() {
cookie.count += 1;
document.getElementById("clickCount").innerHTML =
"Cookie Clicks: " + cookie.count; 
}