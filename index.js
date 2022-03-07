console.log("This is my js")
let d = document;

const maleName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
const dd=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const mm=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


let maleGender = document.querySelector("#male");
let femaleGender = document.querySelector("#female");
let dateBirthday = document.querySelector("#birthday");



function submitForm() {
    let y = document.getElementById("genderText").value;
    console.log(document.getElementById("genderText"));
    console.log(y)
    console.log("femaleGender" + "Akosua");
let male="male"
    if (y === "") {
        alert("Gender cannot be empty")
        return;
    }
    if (y === male) {
        console.log("Your Akan name is ");
        let h3 = document.querySelector('#nameCall');
        h3.innerText = alert("Your Akan name is Kwasi");
        return;
    }
    else if (y === "female"){
        let h3 = document.querySelector('#nameCall');
        h3.innerText = alert("Your Akan name is Akosua");
        return;
    }
}

    //Ughhhhhh..no idea what i'm doing. So, I'll stop here
   //  let inp = document.querySelector("#genderText");
    //let h3 = document.querySelector("#outputText");

    //function submitForm(){
      //  let y = inp.value;
        //if (y === ""){
          //  h3.innerText = "Gender cannot be empty!";
            //return;
        //