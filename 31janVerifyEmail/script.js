// inputtxt.addEventListener("keydown", (event) => {
//     console.log(event.key);
//     if (event.key == "Enter") {
//         console.log(true);
//         event.preventDefault()
//     }
// })


// function myFunction() {
//     var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

//     if (inputtxt.value.match(mailformat)) {
//         output.innerHTML = display(inputtxt.value);
//         output.style.color = "green";
//         output.style.border = "2px solid #000"
//     } else {
//         output.innerHTML = display("invalid email format")
//         output.style.color = "red";
//     }
// }
// --------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------Verify email adress------------------------------------------------------------------------

let inputtxt = document.querySelector("#fname");
let output = document.querySelector(".div");


inputtxt.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        event.preventDefault()
    }
})

let display = (text) => {
    return `<h1>${text}</h1>`; //printing output on document
}

function myFun() {
    console.log((inputtxt.value).length - 1);
    console.log(inputtxt.value.lastIndexOf("."));
    if (inputtxt.value.indexOf("@") === -1) {
        output.innerHTML = display("inavlid email address @");
    } else if (inputtxt.value.indexOf("@") < 1) {
        output.innerHTML = display("invalid email address characters before @");
    } else if (((inputtxt.value).length - 1) - inputtxt.value.lastIndexOf(".") <= 2) {
        output.innerHTML = display("invalid email address characters after .");
    } else {
        output.innerHTML = display(inputtxt.value)
        output.style.color = "green";
    }
}
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------