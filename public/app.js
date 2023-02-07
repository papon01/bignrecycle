function whenLogIn() {

  // Remove the "Login" link
  const loginLink = document.querySelector("#logInOut");
  loginLink.remove();

  // Create the dropdown toggle link
  const toggleLink = document.createElement("a");
  toggleLink.href = "#";
  toggleLink.setAttribute("data-toggle", "dropdown");
  toggleLink.style.padding = "5px";
  toggleLink.style.paddingLeft = "15px";
  toggleLink.id = "signIn";

  // Create the profile picture
  const profilePic = document.createElement("img");
  profilePic.src = userImage;
  profilePic.alt = "Profile_Pic";
  profilePic.id = "profilepic";

  // Create the caret
  const caret = document.createElement("span");
  caret.classList.add("caret");

  // Append the profile picture and caret to the toggle link
  toggleLink.append(profilePic, caret);

  // Create the dropdown menu
  const dropdownMenu = document.createElement("ul");
  dropdownMenu.classList.add("dropdown-menu");

  // Create the dropdown menu items
  const nameItem = document.createElement("li");
  nameItem.innerHTML = userName;
  const emailItem = document.createElement("li");
  emailItem.innerHTML = userEmail;  //old ver. '<a href="#">Email Account</a>'
  const authorityItem = document.createElement("li");
  authorityItem.innerHTML = '<a href="#">Administrator</a>';
  const logoutItem = document.createElement("li");
  logoutItem.innerHTML = '<a id="logOut" onclick="signOut()">Logout</a>';

  // Append the dropdown menu items to the dropdown menu
  dropdownMenu.append(nameItem, emailItem, authorityItem, logoutItem);

  // Append the toggle link and dropdown menu to the dropdown toggle list item
  const dropdownListItem = document.querySelector("#dropdown_lg");
  dropdownListItem.append(toggleLink, dropdownMenu);
}

function whenLogOut() {
  // Remove the existing dropdown menu
  const dropdownListItem = document.querySelector("#dropdown_lg");
  dropdownListItem.innerHTML = "";

  // Create the Login link
  const login = document.createElement("a");
  login.id = "logInOut";
  login.innerText = "Login";

  // Append the Login link to the dropdown list item
  dropdownListItem.append(login);
}

//user data
var googleUser;

function onSignIn(user) {
  googleUser = user;
  var profile = googleUser.getBasicProfile();

  var userId = profile.getId()
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.

  var userName = profile.getName()
  console.log('Name: ' + profile.getName());

  var userImage = profile.getImageUrl()
}
