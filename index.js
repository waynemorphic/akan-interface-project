console.log("This is my js")
let d = document;

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

   