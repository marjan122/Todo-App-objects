// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
import { getDatabase,ref,set,push,onValue,remove,update } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7nCWwfR848SRzxdg5YzduT3-trsT-FEE",
  authDomain: "todo-databse.firebaseapp.com",
  projectId: "todo-databse",
  storageBucket: "todo-databse.appspot.com",
  messagingSenderId: "825584377194",
  appId: "1:825584377194:web:dac30d1dc55276d395d913",
  measurementId: "G-2WNX4RBQLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase()








window.add = function(){
    var obj = {
        name : document.getElementById('inputtxt').value
    }
    var userRef = push(ref(database,'Users/'))
    obj.id = userRef.key
    set(userRef,obj)

}


var Users = document.getElementById('Users')

onValue(ref(database, 'Users'),function(Data){
    Users.innerHTML=''
    console.log(Data.val());    
    var UsersList = Object.values(Data.val())
    for(var i =0; i<UsersList.length; i++){

        var User = UsersList[i]
        Users.innerHTML+=`UserName : ${User.name} <button class="btn btn-outline-info" onclick="dell('${User.id}')">deletebtn</button> <button class="btn btn-outline-info" onclick="updateData('${User.id}')">Edit</button> <br/>`
        console.log(User);

    }

})


window.dell=function(id){

remove(ref(database,`Users/${id}`))

}
window.rad=function(){

    remove(ref(database,`Users/`))
    
    }
    
window.updateData=function(id){
    var name = prompt('Enter Update')

    update(ref(database,`Users/${id}`), {name: name})
    
    }