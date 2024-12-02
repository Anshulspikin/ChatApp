import { db, auth } from '../firebase';  // Import Firestore and Auth
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Reference to Firestore collection where chat messages are stored
const messagesRef = collection(db, 'messages');

// Function to send a new message to Firestore
const sendMessage = async (messageText) => {
  try {
    const docRef = await addDoc(messagesRef, {
      text: messageText,
      uid: auth.currentUser.uid,  // Store user ID with the message
      timestamp: new Date(),
    });
    console.log("Message sent with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding message: ", e);
  }
};

// Get chat messages from Firestore
const loadMessages = async () => {
  const querySnapshot = await getDocs(messagesRef);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};

// Listen for the send button click
const sendMessageButton = document.getElementById('sendMessageButton');
const messageInput = document.getElementById('messageInput');

sendMessageButton.addEventListener('click', () => {
  const messageText = messageInput.value;
  sendMessage(messageText);
  messageInput.value = '';  // Clear input after sending message
});

// Load messages on page load
loadMessages();
