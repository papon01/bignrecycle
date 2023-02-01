//translate function!
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

//sign in function!
function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token)
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