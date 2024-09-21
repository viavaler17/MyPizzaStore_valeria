console.log("JS is loaded");

//Changing the title of website - <title>
document.title = "My Pizza Store";
console.log(document.title);

//Accessing a HTML element using its ID
document.getElementById("banner-text");

let bannerText = document.getElementById("banner-text");
// console.log(bannerText);

// let welcomeMessage = document.getElementById("welcome-message");
// console.log(welcomeMessage);

//Changes the value of the element
// 
// console.log(bannerText.innerText); is not important that much it helps to debug your action(code)
// bannerText.innerText = "Serving crunchy Pizzaaaasss 🍕";
// bannerText.innerHTML = "<i> Serving crunchy Pizzaaaasss 🍕</i>";
// bannerText.innerContent = "<i> Serving crunchy Pizzaaaasss 🍕</i>";

function changeText(){
if(bannerText.innerText === "Delicious Pizzas, Anytime!") {
    bannerText.innerText = "Serving Hot Pizza";
    bannerText.style.color = "red";
}
else{
        bannerText.innerText = "No Pizza today";
        bannerText.style.color = "blue";
        bannerText.style.backgroundColor = "white";
    }
}
changeText();

// let bannerText = document.getElementById("banner-text");
// if(bannerText === document.getElementById("banner-text")) {
//     console.log(bannerText.innerText = "Serving Hot Pizza");
// }
// else{
//         console.log(bannerText.innerText = "No Pizza today");
//     }


//-----------------------Changing the greeting message after a UserName

let userName = "Valeria"; //we have to declare a variable with a name as a value
let welcomeMessage = document.getElementById("welcome-message"); // then we declare a variable after its id


// Conditional if the user is assigned or not

if(userName){
    welcomeMessage.innerText = "Welcome, " + userName + "!";

    // creating an Element using .createElement
    let specialOffer = document.createElement('h1'); //() here we put a part of html where we want to create an element

    // Setting the content for the h1 element
    specialOffer.innerText = "A Special Offer only for you!!!";
    console.log(specialOffer); // only for debugging

    // Once the element is created, we append it to DOM or HTML page
    let aboutSection = document.querySelector(".about");
// console.log(aboutSection);
aboutSection.insertAdjacentElement("afterend", specialOffer);
    // Appending the newly created element to the body\


// Adding new elements dynamically
// document.createElement('') then you add it to your dom
}
else {
    let button = document.createElement('BUTTON');
    button.innerText = "Sign in!";
    let buttonSection = document.querySelector('.about');
    buttonSection.insertAdjacentElement("beforebegin", button);
    button.style.color = "yellow";
    button.style.backgroundColor = "black";
    button.style.padding = "50px 20px";
}

// ----------- REMOVE an ELEMENT

// let specialitySection = document.querySelector('.speciality');
// specialitySection.remove();


// ------------------------------- DOM DAY 2
// getElementByClassName

let navLinks = document.getElementsByClassName("nav-link");
console.log(navLinks);

for (let index = 0; index < navLinks.length; index++) {
    navLinks[index].style.color = "green";
    navLinks[index].style.fontSize = "14px";
}

// ----- getElementsByTagName and color all the h2 to blue

let headings = document.getElementsByTagName("h2");
console.log(headings);

for (let index = 0; index < headings.length; index++) {
    headings[index].style.color = "blue";
}

// ------ creating an image in DOM

let offerImage = document.createElement("img");
offerImage.setAttribute("src","https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
console.log(offerImage.getAttribute("src"));
// offerImage.style.width = "300px";
// offerImage.style.display = "block";
// offerImage.style.margin = "0 auto";

// --------- 2nd Approach: Use CSS Class
// with this Approach we can also add Id in CSS (in the same way)
offerImage.classList.add("centered-image");
console.log("Class name is: " + offerImage.className);



// offerImage.setAttribute("alt","alternative Text");
// console.log(offerImage.getAttribute("alt"));
document.body.appendChild(offerImage);


// -------EVENTS -----------------
//1. Event Hnadling
// let viewButton = document.querySelectorAll('.cta-btn'); // bc we have 2 classes with this name, it will be applied to the first class in the order
// console.log(viewButton);

// for (let index = 0; index < viewButton.length; index++) {
//     viewButton[index].onclick = () => {
//     console.log("Here we go!");
//     }
// }


let viewButton = document.getElementById('view-btn');
console.log(viewButton);

// viewButton.onclick = () => {
//     console.log("I am clicked!");
// }

// viewButton.onclick = () => {
//     console.log("I am clicked again!");
// }

// viewButton.onclick = () => {
//     console.log("I am clicked again and again!");
// }

// ------- EVENT Listeners ----------
viewButton.addEventListener("click", () => {
    console.log("Thank you again!!")
})

viewButton.addEventListener("click", () => {
    console.log("Thank you twice!!")
})

viewButton.addEventListener("click", () => {
    console.log("Thank you 3 times!!")
})


