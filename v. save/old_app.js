//add profile      
function whenLogIn() {
    const element = document.createElement("ul");
    element.classList.add("dropdown-menu");
    
    const listItem1 = document.createElement("li");
    const link1 = document.createElement("a");
    link1.setAttribute("href", "#");
    link1.textContent = "Name Surname";
    listItem1.appendChild(link1);
    
    const listItem2 = document.createElement("li");
    const link2 = document.createElement("a");
    link2.setAttribute("href", "#");
    link2.textContent = "Email Account";
    listItem2.appendChild(link2);
    
    const listItem3 = document.createElement("li");
    const link3 = document.createElement("a");
    link3.setAttribute("href", "#");
    link3.textContent = "User Authority";
    listItem3.appendChild(link3);
    
    const listItem4 = document.createElement("li");
    const link4 = document.createElement("a");
    link4.setAttribute("href", "#");
    link4.setAttribute("id", "signOut");
    link4.setAttribute("onclick", "whenLogOut()");
    link4.textContent = "Logout";
    listItem4.appendChild(link4);
    
    element.appendChild(listItem1);
    element.appendChild(listItem2);
    element.appendChild(listItem3);
    element.appendChild(listItem4);
    
    const list = document.getElementById("dropdown_lg");
    if (list) {
        list.appendChild(element);
        addpic();
    }
}

function addpic() {
    const img = document.createElement("img");
    img.setAttribute("onclick", "whenLogOut()");
    img.setAttribute("src", "Screenshot 2023-02-05 122656.png");
    img.setAttribute("width", "42px");
    img.setAttribute("height", "42px");
    img.setAttribute("borderRadius", "50%");
    
    const logInOut = document.getElementById("logInOut");
    if (logInOut) {
        logInOut.replaceChild(img, logInOut.firstChild);
    }
}

function whenLogOut() {
    const list = document.getElementById("dropdown_lg");
    if (list) {
        list.removeChild(list.lastChild);
    }
    
    const logInOut = document.getElementById("signOut");
    if (logInOut) {
        logInOut.innerHTML = "Login";
        logInOut.setAttribute("onclick", "whenLogIn()");
    }
}
