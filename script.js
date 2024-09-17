console.log("JS is loading successfully");

//Changing the title of website - <title> 
document.title = "My Pizza Store";
console.log(document.title);

//Accessing a HTML element using its ID 
let bannerText = document.getElementById("banner-text");
console.log(bannerText);

// Changing the value of the element
// innerText, innerHTML or textContent
// bannerText.innerText = "<i> Serving Hot Pizzasss 🍕 </i>";
// bannerText.innerHTML = "<i> Serving Hot Pizzasss 🍕 </i>"
// bannerText.textContent = "Serving Hot Pizzasss 🍕";

function changeText(){
// Conditional text modification using DOM and JS based on the HTML element text
if (bannerText.innerText === "Delicious Pizzas, Anytim") {
    bannerText.innerText = "Serving Hot Pizzas";
    // Manipulating the style using DOM style property
    bannerText.style.color = "red";
    bannerText.style.backgroundColor = "lightPink";
} else {
    bannerText.innerText = "No Pizza today";
    bannerText.style.color = "blue";
    bannerText.style.backgroundColor ="lightBlue";
}
}

changeText();


// ------ Changing the greeting message based on the username -----
// Specify the username or leave it blank to simulate a guest
let userName = "";
let welcomeMessage = document.getElementById("welcome-message");

// Conditional to check if userName is assigned or not 
if(userName){
    console.log(userName);
    welcomeMessage.innerText = "Welcome, " + userName + "!";
    //Creating an element using createElement method
    let specialOffer = document.createElement('h1'); // <h1> </h1>
    // Setting the content for the h2 element
    specialOffer.innerText = "A Special Offer only for you!!!"; // <h1> A Special Offer only for you!!! </h1>
    console.log(specialOffer); //testing if the element is created successfully
    // Once the element is created we append it to the DOM / HTML Page
    // Accessing the about element using the class property
    // console.log(document.getElementsByClassName("about"));
    let aboutSection = document.querySelector(".about");
    // console.log(aboutSection);
    aboutSection.insertAdjacentElement("afterend", specialOffer);
    // Appending the newly created element to the body 
    // document.body.appendChild(specialOffer);

}
else{
    console.log(userName);
    welcomeMessage.innerText = "Welcome Guest!";
    // ------ Adding new element dynamically -----
    // document.createElement('') then you add it to your DOM (appendChild)
    let signUpButton = document.createElement('button');
    signUpButton.innerText ="SIGN UP";
    signUpButton.style.color = "red";
    signUpButton.style.fontSize = "1.5em";
    signUpButton.style.backgroundColor = "Orange";
    signUpButton.style.padding = "5px";
    let aboutSection = document.querySelector(".about");
    aboutSection.insertAdjacentElement("afterend", signUpButton);

    // --- Remove an element ----
    let specialitySection = document.querySelector('.speciality');
    specialitySection.remove();
}



