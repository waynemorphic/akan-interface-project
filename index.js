console.log("This is my js")
let d = document;

const maleName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
const dd=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const mm=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


let maleGender = document.querySelector("#male");
let femaleGender = document.querySelector("#female");
let dateBirthday = document.querySelector("#birthday");

switch (searchAkanName()) {
    case Sunday:
        maleName = [0];
        break;
    case Monday:
        maleName = [1];
        break;
    case Tuesday:
        maleName = [2];
        break;
    case Wednesday:
        maleName = [3];
        break;
    case Thursday:
        maleName = [4];
        break;
    case Friday:
        maleName= [5];
        break;
    case Saturday:
        maleName= [6];
        break;


function submitForm() {
    let y = document.getElementById("genderText").value;
    if (y === "") {
        alert("Gender cannot be empty")
    }
    if (y == male && dd === [0]) {

    }}

    //Ughhhhhh..no idea what i'm doing. So, I'll stop here
   //  let inp = document.querySelector("#genderText");
    //let h3 = document.querySelector("#outputText");

    //function submitForm(){
      //  let y = inp.value;
        //if (y === ""){
          //  h3.innerText = "Gender cannot be empty!";
            //return;
        //}
    //}