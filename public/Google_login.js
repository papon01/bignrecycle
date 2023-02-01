var YOUR_CLIENT_ID = '837943993291-ockna05iiitrqkjjldcun1h623pheo2n.apps.googleusercontent.com';
var YOUR_REDIRECT_URI = 'https://bignrecycle.web.app';
var fragmentString = location.hash.substring(1);

// Parse query string to see if page request is coming from OAuth 2.0 server.
var params = {};
var regex = /([^&=]+)=([^&]*)/g, m;
while (m = regex.exec(fragmentString)) {
params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
}
if (Object.keys(params).length > 0) {
localStorage.setItem('oauth2-test-params', JSON.stringify(params) );
if (params['state'] && params['state'] == 'basic_login') {
    basicLogin();
}
}

// If there's an access token, try an API request.
// Otherwise, start OAuth 2.0 flow.
function basicLogin() {
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
        oauth2SignIn().then(function() {
            console.log('User signed in.');
            document.getElementById('signInOutButton').innerHTML = 'Sign Out';
            document.getElementById('signInOutButton').onclick = signOut;
          });
    }
    };
    xhr.send(null);
} else {
    oauth2SignIn().then(function() {
        console.log('User signed in.');
        document.getElementById('signInOutButton').innerHTML = 'Sign Out';
        document.getElementById('signInOutButton').onclick = signOut;
      });
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
                'state': 'basic_login',
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
    userImageElement.style.width = 'auto';
    userImageElement.style.height = 'auto';
    userImageElement.style.borderRadius = '50%';

    document.body.appendChild(userImageElement);


    
  
}

    //singout
    function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        document.getElementById('signInOutButton').innerHTML = 'Sign In';
        document.getElementById('signInOutButton').onclick = signIn;
    });
    }

    
