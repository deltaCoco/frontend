const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/index.png") {
    myImage.setAttribute("src", "images/bird.jpg");
  } else {
    myImage.setAttribute("src", "images/index.png");
  }
});

let myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `MDN learning, ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `MDN learning, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
  });