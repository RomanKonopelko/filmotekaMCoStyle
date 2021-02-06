var firebaseConfig = {
  apiKey: 'AIzaSyBNIAhHTVSS_FgmrIA50_fMlsJIzrHPLUw',
  authDomain: 'filmgeek-js.firebaseapp.com',
  projectId: 'filmgeek-js',
  storageBucket: 'filmgeek-js.appspot.com',
  messagingSenderId: '759026227062',
  appId: '1:759026227062:web:451d5ef97d20e7288acc57',
  measurementId: 'G-9HJTT3B2GK',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
console.log(firebase);

const auth = firebase.auth();
// auth.signOut();
// auth.onAuthStateChanged(user => console.log(user));
const modalExit = document.querySelector('.auth__exit');
function modalClose(params) {
  authBackdrop.classList.add('auth__backdrop--hidden');
}

modalExit.addEventListener('click', modalClose);

const authBackdrop = document.querySelector('.auth__backdrop');
console.log(authBackdrop);
const authModalSignIn = document.querySelector('.signIn__modal');
const authModalSignUp = document.querySelector('.signUp__modal');
const signUpEmail = document.getElementById('authEmail');
const signUpPassword = document.getElementById('authPassword');
const signUpBtn = document.getElementById('signUp-submit');

const signInEmail = document.getElementById('signInEmail');
const signInPassword = document.getElementById('signInPassword');
const signInBtn = document.getElementById('signIn-submit');

const btnSignIn = document.querySelector('.signIn-user');
const btnSignUp = document.querySelector('.signUp-user');

btnSignIn.addEventListener('click', () => {
  authBackdrop.classList.remove('auth__backdrop--hidden');
});
signUpBtn.addEventListener('click', signUp);
signInBtn.addEventListener('click', signIn);

function signUp(params) {
  console.dir(signUpEmail);
  const signUpRequest = auth.createUserWithEmailAndPassword(
    signUpEmail.value,
    signUpPassword.value,
  );
  signUpRequest.catch(e => {
    alert(e);
  });

  alert('done');
}

function signIn(params) {
  const signInRequest = auth.signInWithEmailAndPassword(
    signInEmail.value,
    signInPassword.value,
  );
  signInRequest.catch(e => alert(e));
  alert('Signed in' + signInEmail.value);
}
