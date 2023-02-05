//translate function!
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}











//on sign in
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const userId = profile.getId();
    const userName = profile.getName();
    const userImage = profile.getImageUrl();
    const userEmail = profile.getEmail();

    // Do not send userId to your backend! Use an ID token instead.
    console.log(`ID: ${userId}`);
    console.log(`Name: ${userName}`);
    console.log(`Image URL: ${userImage}`);
    console.log(`Email: ${userEmail}`);


    //porfilepic "window.userImage"
    window.userImage = userImage;

    const userImageElement = document.createElement('img');
    userImageElement.src = window.userImage;
    userImageElement.alt = 'User Profile Image';
    userImageElement.style.width = '42px';
    userImageElement.style.height = '42px';
    userImageElement.style.borderRadius = '50%';

    document.body.appendChild(userImageElement);


    
  
}

   



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      const profilePicture = user.providerData[0].photoURL;
      // Use the profilePicture URL to display the user's profile picture in an <img> element
      const profilePictureElement = document.getElementById("profile-picture");
      profilePictureElement.src = profilePicture;
    } else {
      // User is signed out
    }
  });