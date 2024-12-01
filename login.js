// Import the necessary Firebase modules
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

// Get the login form elements
const loginButton = document.getElementById('loginButton');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Add event listener to login button
loginButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const email = emailInput.value;
  const password = passwordInput.value;

  // Use Firebase Authentication to sign in with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Logged in as:', user.email);

      // Redirect to chat page after login
      window.location.href = 'chat.html';  // You can create this page for chatting
    })
    .catch((error) => {
      console.error('Error logging in:', error.message);
    });
});
