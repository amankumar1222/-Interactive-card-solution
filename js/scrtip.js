
// const myForm = document.getElementById("myForm")
// const sBtn = document.getElementById("sBtn")
// const error = document.querySelectorAll(".error")
// const mySpan = document.querySelectorAll(".number > h2 > span")
// const names = document.querySelectorAll(".name > p")
// const cv = document.querySelector(".cv")
// const currentDate = new Date();
// const submitInfo = document.getElementById("submitInfo");

// console.log(submitInfo);


// // // Get the current year

// const currentYear = currentDate.getFullYear();
// const currentMonth = currentDate.getMonth() + 1; 

// function removeSpaces(numberString) {
//     // Remove double spaces
//     numberString = numberString.replace(/\s{2,}/g, ' ');
//     // Remove single spaces
//     numberString = numberString.replace(/\s/g, '');
//     return numberString;
// }


// function isNotNumber(number, erName) {
//     if (isNaN(number)){
//         erName.innerHTML = "Wrong formate, numbers only"
//         erName.classList.add("red")
//         isValid = false;
//     }    
// }


// myForm.addEventListener("submit", function(e) {
//     e.preventDefault();
//     let et = e.target

//     let isValid = true;
//     // i will create a function 
//     if(et.name.value == ""){
//         error[0].innerHTML = "Can't be Blank"
//         error[0].classList.add("red")
//         isValid = false;

//     }

//     else{
//         names[0].innerHTML =et.name.value
//     }


//     if(et.number.value == ""){
//         error[1].innerHTML = "Can't be Blank"
//         error[1].classList.add("red")
//         isValid = false;
//     }

//     else{
//         names[1].innerHTML =et.number.value
//         let spanNum =removeSpaces(et.number.value)
//         let fv = 0
//         let lv = 4
//         for (const span of mySpan) {
//             span.innerHTML = spanNum.slice(fv, lv)
//             fv = lv
//             lv += 4
//         }
//         isNotNumber(et.number.value, error[1])
//     }

//     let uYear = et.year.value
//     let umonth = et.month.value

//     if (uYear == "" || umonth == ""){
//         error[2].innerHTML = "Can't be Blank"
//         error[2].classList.add("red")
//         isValid = false;
//     }
//     else{
//         names[1].innerHTML = `${umonth} / ${uYear}`

//         if(uYear <= currentYear && umonth <= currentMonth || umonth > 12 ){
//             error[2].innerHTML = "Can't be Blank"
//             error[2].classList.add("red")
//             isValid = false;

//         }
//         isNotNumber(umonth, error[2])
//         isNotNumber(uYear, error[2])

//     }

//     if(et.cvc.value == ""){
//         error[3].innerHTML = "Can't be Blank"
//         error[3].classList.add("red")
//         isValid = false;
//     }
//     else{
//         cv.innerHTML = et.cvc.value
//         isNotNumber(et.cvc.value, error[3])
//     }


    
//     if (isValid) {
//         myForm.style.display = "none";
//        submitInfo.style.display = "flex";
//         document.getElementById("myForm");
//     }



// })










const myForm = document.getElementById("myForm");
const sBtn = document.getElementById("sBtn");
const error = document.querySelectorAll(".error");
const mySpan = document.querySelectorAll(".number > h2 > span");
const names = document.querySelectorAll(".name > p");
const cv = document.querySelector(".cv");
const currentDate = new Date();
const submitInfo = document.getElementById("submitInfo");
const thanksMessage = document.getElementById("thanksMessage");

console.log(submitInfo);

// Get the current year
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

function removeSpaces(numberString) {
    // Remove double spaces
    numberString = numberString.replace(/\s{2,}/g, ' ');
    // Remove single spaces
    numberString = numberString.replace(/\s/g, '');
    return numberString;
}

function isNotNumber(number, erName) {
    if (isNaN(number)) {
        erName.innerHTML = "Wrong format, numbers only";
        erName.classList.add("red");
        isValid = false;
    }
}

myForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let et = e.target;
    let isValid = true;
      // Reset error messages
      error.forEach(err => {
        err.innerHTML = "";
        err.classList.remove("red");
    });

    if (et.name.value == "") {
        error[0].innerHTML = "Can't be blank";
        error[0].classList.add("red");
        isValid = false;
    } else {
        names[0].innerHTML = et.name.value;
    }

    if (et.number.value == "") {
        error[1].innerHTML = "Can't be blank";
        error[1].classList.add("red");
        isValid = false;
    } else {
        names[1].innerHTML = et.number.value;
        let spanNum = removeSpaces(et.number.value);
        let fv = 0;
        let lv = 4;
        for (const span of mySpan) {
            span.innerHTML = spanNum.slice(fv, lv);
            fv = lv;
            lv += 4;
        }
        isNotNumber(et.number.value, error[1]);
    }

    let uYear = et.year.value;
    let umonth = et.month.value;

    if (uYear == "" || umonth == "") {
        error[2].innerHTML = "Can't be blank";
        error[2].classList.add("red");
        isValid = false;
    } else {
        names[1].innerHTML = `${umonth} / ${uYear}`;

        if (uYear <= currentYear && umonth <= currentMonth || umonth > 12) {
            error[2].innerHTML = "Invalid month or year";
            error[2].classList.add("red");
            isValid = false;
        }
        isNotNumber(umonth, error[2]);
        isNotNumber(uYear, error[2]);
    }

    if (et.cvc.value == "") {
        error[3].innerHTML = "Can't be blank";
        error[3].classList.add("red");
        isValid = false;
    } else {
        cv.innerHTML = et.cvc.value;
        isNotNumber(et.cvc.value, error[3]);
    }

    if (isValid) {
        myForm.style.display = "none";
        submitInfo.style.display = "flex";
        submitInfo.style.display = "block"; // Show thanks message
    }
});


