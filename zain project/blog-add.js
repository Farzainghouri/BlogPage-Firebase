var posting  = document.getElementById("posting");

console.log(posting);




var ads = [];


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


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);






async function geting(){
    const querySnapshot = await getDocs(collection(db, "product"));
querySnapshot.forEach((doc) => {
  showAdd(doc.data())
});
}

geting()





 function showAdd(ee){ 
    // let slect = category.value;
    // var gara = eval(slect);
    // var image =  Imagee   ;
    var newnew = { title: ee.title, dec: ee.dec , url: ee.url};
    // var diva = eval(ee.cata);
    ads.push(newnew);
    // console.log(catagory);
}

// showAdd();
function render(){
    
        for (var count = 0; count < 10 ; count++) {    
        
        
            
        // catagory[count].cata.innerHTML = "";
        posting.innerHTML += 
        
        `
        <div style="background-color: wheat; width: 100%; height: 90vh; display: flex; justify-content: center; align-items: center;">
        <div style="display: flex; justify-content: space-around;">
            <div style="width: 40%;">
                <img width="80%" src="${ads[count].url}" alt="">

            </div>
            <div style="width: 40%;  display: flex; justify-content: center; align-items: center; flex-direction: column">
                <h1 style="color: black;">${ads[count].title}</h1>
                <p>${ads[count].dec}</p>
            </div>
        </div>
        </div>
   
             `
            ;
            
            
        }
        
        
    }
    
    setTimeout(() => {
    render()
}, 4000);