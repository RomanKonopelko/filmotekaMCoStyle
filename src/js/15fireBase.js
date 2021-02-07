var firebaseConfig = {
  apiKey: 'AIzaSyBNIAhHTVSS_FgmrIA50_fMlsJIzrHPLUw',
  authDomain: 'filmgeek-js.firebaseapp.com',
  projectId: 'filmgeek-js',
  storageBucket: 'filmgeek-js.appspot.com',
  messagingSenderId: '759026227062',
  appId: '1:759026227062:web:451d5ef97d20e7288acc57',
  measurementId: 'G-9HJTT3B2GK',
};

const SIGN_UP_SUCCESS = 'Congratulations! You made the right choice!!!';
const SIGN_IN_SUCCESS = 'Perfect! You are on Board!!!';
const DEMAND_TO_REGISTER =
  'To be able to use all features of our Magic source, please pass the registration!';
const DEFAULT_SIGN_UP = 'Become a part of our filmgeek club!';
const DEFAULT_SIGN_IN = 'Welcome back! Write your data below!';
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
console.log(firebase);

const auth = firebase.auth();
// auth.signOut();
let userStatus;

auth.onAuthStateChanged(user => console.log(user));
auth.onAuthStateChanged(user => {
  if (user) {
    // alert('hellooo');
    btnSignOut.classList.remove('is-hidden');
    btnSignUp.classList.add('is-hidden');

    btnSignIn.classList.add('sign-user');
    btnSignIn.disabled = true;

    userStatus = true;
    // console.log(user);

  } else {
    // alert('byee');
    btnSignOut.classList.add('is-hidden');
    btnSignUp.classList.remove('is-hidden');

    btnSignIn.classList.remove('sign-user');
    btnSignIn.disabled = false;

    userStatus = false;

  }
});

function modalClose(params) {
  authBackdrop.classList.add('auth__backdrop--hidden');
  body.classList.remove('overflow');
}
(function modalBtnAddListener(params) {
  const modalExit = document.querySelectorAll('.auth__exit');
  let array = [...modalExit];
  array.forEach(e => {
    e.addEventListener('click', modalClose);
  });
})();

const authBackdrop = document.querySelector('.auth__backdrop');
console.log(authBackdrop);
const authModalSignIn = document.querySelector('.signIn__modal');
const authModalSignUp = document.querySelector('.signUp__modal');
const signUpEmail = document.getElementById('authEmail');
const signUpPassword = document.getElementById('authPassword');
const signUpBtn = document.getElementById('signUp-submit');

const authMessage = document.querySelector('.auth__message');

const signInEmail = document.getElementById('signInEmail');
const signInPassword = document.getElementById('signInPassword');
const signInBtn = document.getElementById('signIn-submit');

const btnSignIn = document.querySelector('.signIn-user');
const btnSignUp = document.querySelector('.signUp-user');
const btnSignOut = document.querySelector('.signOut-user');
btnSignOut.addEventListener('click', () => {
  auth.signOut();
});

btnSignIn.addEventListener('click', () => {
  body.classList.add('overflow');
  authModalSignIn.classList.remove('signIn-hidden');
  authModalSignUp.classList.add('signUp-hidden');
  authBackdrop.classList.remove('auth__backdrop--hidden');
  welcomeTextSignIn.textContent = DEFAULT_SIGN_IN;
});

authMessage.addEventListener('click', () => {
  authModalSignIn.classList.remove('signIn-hidden');
  authModalSignUp.classList.add('signUp-hidden');
  welcomeTextSignIn.textContent = DEFAULT_SIGN_IN;
});

btnSignUp.addEventListener('click', () => {
  body.classList.add('overflow');
  authModalSignUp.classList.remove('signUp-hidden');
  authModalSignIn.classList.add('signIn-hidden');
  authBackdrop.classList.remove('auth__backdrop--hidden');
  welcomeTextSignUp.textContent = DEFAULT_SIGN_UP;
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

  welcomeTextSignUp.textContent = SIGN_UP_SUCCESS;
  setTimeout(() => {
    authBackdrop.classList.add('auth__backdrop--hidden');
  }, 2000);
}

function signIn(params) {
  const signInRequest = auth.signInWithEmailAndPassword(
    signInEmail.value,
    signInPassword.value,
  );
  signInRequest.catch(e => alert(e));

  welcomeTextSignIn.textContent = SIGN_IN_SUCCESS;
  setTimeout(() => {
    authBackdrop.classList.add('auth__backdrop--hidden');
  }, 2000);
  // alert('Signed in' + signInEmail.value);
}
