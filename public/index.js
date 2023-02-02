//translate function!
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
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