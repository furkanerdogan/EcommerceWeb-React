import firebase, { initializeApp } from "firebase/app";
import "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDaWKhDFVwNHwE9o_-htXK4ltKNKoyn0Rw",
  authDomain: "mytas1.firebaseapp.com",
  projectId: "mytas1",
  storageBucket: "mytas1.appspot.com",
  messagingSenderId: "821903860727",
  appId: "1:821903860727:web:804c42fb2e9d178c21c4f2"
};

export const app = firebase.initializeApp(firebaseConfig);



// const firebaseConfig = {
//     apiKey: "AIzaSyDaWKhDFVwNHwE9o_-htXK4ltKNKoyn0Rw",
//     authDomain: "mytas1.firebaseapp.com",
//     projectId: "mytas1",
//     storageBucket: "mytas1.appspot.com",
//     messagingSenderId: "821903860727",
//     appId: "1:821903860727:web:804c42fb2e9d178c21c4f2"
//   };
//   export  {firebaseConfig};

//not index.js deki config alanını firebaseconfig olarak değiştir eğer bunu kullanacaksan

