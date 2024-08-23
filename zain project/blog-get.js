

var blogAdd = document.getElementById("blogadd");
var title = document.getElementById("one");
var dec = document.getElementById("two");
var inp = document.getElementById("three");


let Imagee = null;
inp.addEventListener("change", handleFileInput);

function handleFileInput(event) {
    const file = event.target.files[0]; 
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.readAsDataURL(file); 
        Imagee = reader; 
    } else {
        alert("Selected file is not an image.");
    }
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {getFirestore, collection, addDoc, getDocs} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";




const firebaseConfig = {
    apiKey: "AIzaSyCSZbyCsgYNFhIogmfh4OKjm6TgQ2FnKFg",
    authDomain: "login-page-a6bd9.firebaseapp.com",
    projectId: "login-page-a6bd9",
    storageBucket: "login-page-a6bd9.appspot.com",
    messagingSenderId: "948800827323",
    appId: "1:948800827323:web:a0ee3bfdacb3969e41de9e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log(db);
blogAdd.addEventListener("click", sending);

function sending(){
    try {
        const docRef =  addDoc(collection(db, "product"), {
          title:  title.value,
          dec:  dec.value ,
          url : Imagee.result,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      title.value = ""
      dec.value = ""
      

      console.log("done");
}

