//translate function!
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

/*  v.1 js fuck IDK

var GoogleAuth;
  var SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';
  function handleClientLoad() {
    // Load the API's client and auth2 modules.
    // Call the initClient function after the modules load.
    gapi.load('client:auth2', initClient);
  }

  function initClient() {
    // In practice, your app can retrieve one or more discovery documents.
    var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

    // Initialize the gapi.client object, which app uses to make API requests.
    // Get API key and client ID from API Console.
    // 'scope' field specifies space-delimited list of access scopes.
    gapi.client.init({
      'apiKey': 'AIzaSyBDEXKsKG1mjccq56dkXYGJwS5EwgosANQ',
      'clientId': '837943993291-ockna05iiitrqkjjldcun1h623pheo2n.apps.googleusercontent.com',
      'discoveryDocs': [discoveryUrl],
      'scope': SCOPE
    }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);

      // Handle initial sign-in state. (Determine if user is already signed in.)
      var user = GoogleAuth.currentUser.get();
      setSigninStatus();

      // Call handleAuthClick function when user clicks on
      //      "Sign In/Authorize" button.
      $('#signOut').click(function() {
        handleAuthClick();
      });
      
    });
  }

  function handleAuthClick() {
    if (GoogleAuth.isSignedIn.get()) {
      // User is authorized and has clicked "Sign out" button.
      GoogleAuth.signOut();
    } else {
      // User is not signed in. Start Google auth flow.
      GoogleAuth.signIn();
    }
  }

  

  function setSigninStatus() {
    var user = GoogleAuth.currentUser.get();
    var isAuthorized = user.hasGrantedScopes(SCOPE);
    if (isAuthorized) {
      $('#signOut').html('pass-Sign out');
      
      $('#auth-status').html('You are currently signed in and have granted ' +
          'access to this app.');
    } else {
      $('#signOut').html('pass-Sign In');
      
      $('#auth-status').html('You have not authorized this app or you are ' +
          'signed out.');
    }
  }

  function updateSigninStatus() {
    setSigninStatus();
  }

*/

var YOUR_CLIENT_ID = '837943993291-ockna05iiitrqkjjldcun1h623pheo2n.apps.googleusercontent.com';
var YOUR_REDIRECT_URI = '837943993291-ockna05iiitrqkjjldcun1h623pheo2n.apps.googleusercontent.com';
var fragmentString = location.hash.substring(1);

// Parse query string to see if page request is coming from OAuth 2.0 server.
var params = {};
var regex = /([^&=]+)=([^&]*)/g, m;
while (m = regex.exec(fragmentString)) {
  params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
}
if (Object.keys(params).length > 0) {
  localStorage.setItem('oauth2-test-params', JSON.stringify(params) );
  if (params['state'] && params['state'] == 'try_sample_request') {
    SignInOut();
  }
}

// If there's an access token, try an API request.
// Otherwise, start OAuth 2.0 flow.
function SignInOut() {
  var params = JSON.parse(localStorage.getItem('oauth2-test-params'));
  if (params && params['access_token']) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET',
        'https://www.googleapis.com/drive/v3/about?fields=user&' +
        'access_token=' + params['access_token']);
    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response);
      } else if (xhr.readyState === 4 && xhr.status === 401) {
        // Token invalid, so prompt for user permission.
        oauth2SignIn();
      }
    };
    xhr.send(null);
  } else {
    oauth2SignIn();
  }
}

/*
 * Create form to request access token from Google's OAuth 2.0 server.
 */
function oauth2SignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create element to open OAuth 2.0 endpoint in new window.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {'client_id': YOUR_CLIENT_ID,
                'redirect_uri': YOUR_REDIRECT_URI,
                'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
                'state': 'try_sample_request',
                'include_granted_scopes': 'true',
                'response_type': 'token'};

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();

  const googleUser = GoogleAuth.currentUser.get()

  const profile = googleUser.getBasicProfile();
    const userId = profile.getId();
    const userName = profile.getName();
    const userImage = profile.getImageUrl();
    const userEmail = profile.getEmail();


    console.log(`ID: ${userId}`);
    console.log(`Name: ${userName}`);
    console.log(`Image URL: ${userImage}`);
    console.log(`Email: ${userEmail}`);
    console.log("i can do it yeah!!!")


      //porfilepic "window.userImage"
      window.userImage = userImage;

      const userImageElement = document.createElement('img');
      userImageElement.src = window.userImage;
      userImageElement.alt = 'User Profile Pic';
      userImageElement.style.width = '42px';
      userImageElement.style.height = '42px';
      userImageElement.style.borderRadius = '50%';
      
      const pp = document.getElementById('profilepic');
      
      pp.replaceChild(userImageElement, pp.firstChild);
}




       







