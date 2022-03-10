console.log("This is my js")
let d = document;

function submitForm(Akan){
    event.preventDefault();

    let person1 = document.getElementById("genderText1");
    let person2 = document.getElementById("genderText2");    
    let dateIs = new Date(document.getElementById("birthday").value);
    let malePerson = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    let femalePerson = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    let birthdayDate = dateIs.getDay();

    // do {
    //     alert("Birthday cannot be empty")
    // } while(dateIs.checked === false);

    //Here we add comparisons with do while loops since there are three user entries
    if (person1.checked === false && person2.checked === false){
        do {
            alert("Forms cannot be empty. Please fill the forms")
        } while(dateIs.checked === false) 
    } 

    else if (person2.checked === true) {
        do {
            alert('Your Akan name is ' + (femalePerson[birthdayDate]));
        } while (dateIs.checked === true)
    }
    else if (person1.checked === true){
        do {
            alert ('Your Akan name is ' + (malePerson[birthdayDate]));
        } while (dateIs.checked === true)
    }
    
    else {
        alert("Forms cannot be empty. Please fill the forms")
    }
  
    
// In the code below, i was trying to remove repetition in the object creation and throw illegals 
// depending on user entries. Help me simplify the code while mantaining the functionality
   
 

    // if (dateIs.checked === false) {
    //     alert("Birthday date cannot be empty");
    // }
    // else if (person1.checked === true && person2.checked === true) {
    //     alert("Birthday date cannot be empty");
    // }
    // if (dateIs.checked === true || person1.checked === false && person2.checked === false) {
    //     alert("Gender cannot be empty");
    // }
    // if (dateIs.checked === true && person1.checked === true) {
    //     alert('Your Akan name is ' + (malePerson[birthdayDate]));
    // }
   // else if (dateIs.checked === false && person1.checked === true || person2.checked === false) {
       // alert("Either forms cannot be empty");
    //}
    // else if (dateIs.checked === true && person1.checked === false || person2.checked === false) {
    //     alert("Gender cannot be empty");
    // }
    //if (dateIs.checked === false && person1.checked === false)  {
      //  alert("Birthday date and Gender type cannot be empty");
    //}
    //if (dateIs.checked === false && person2.checked === false) {
      //  alert("Birthday date and Gender cannot be empty")
    //}
 //   if (dateIs.checked === false )  {
   //     alert("Birthday date cannot be empty");
    //}
    
    //else if (person1.checked === false && person2.checked === false || dateIs.checked === false) {
       // alert("Gender and date cannot be empty")
    //}
    // if (dateIs.checked === true && person1.checked == true) {
    //     alert('Your Akan name is ' + (malePerson[birthdayDate]));

    // }
    // if (dateIs.checked === true && person2.checked == true){
    //     alert('Your Akan name is ' + (femalePerson[birthdayDate]));
    // }

}
   

// function submitForm() {
//   let person1 = document.getElementById("genderText1");
//     let person2 = document.getElementById("genderText2");
//     let personName = document.getElementById("nameCall");
//     let dateIs = new Date(document.getElementById("birthday").value);
//     let malePerson = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
//     let femalePerson = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
//     let birthdayDate = dateIs.getDay();
//  }
    //}
    
//     
//     let ddMale = { //male birthday dates as objects
//         constructor(){
//         this.Sunday: 'Kwasi',
//         this.Monday: 'Kwadwo',
//         this.Tuesday: 'Kwabena',
//         this.Wednesday: 'Kwaku',
//         this.Thursday: 'Yaw',
//         this.Friday: 'Kofi',
//         this.Saturday: 'Kwame'}

//         personName: function out(){
//             if (dateIs.checked === false && person1 === false) {
//                 alert("Birthday and Gender cannot be empty!")
//                 return;
//             }
//             if (dateIs.checked === true && person1 === true {
//                  alert("Your Akan name is " + this.Sunday)
//                 return;
//             }
//         }
//     }
// }
//     if (output === "" && x === "") {
//         alert("Gender and date cannot be empty")
//         return;
//     }
//     if (output === "male") {
//         alert("Your Akan name is Kwasi");
//         return;
//     }
//     else if (output === "female"){
      
//         alert("Your Akan name is Akosua");
//         return;
//     }
// }


