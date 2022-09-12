const wholeBody = document.querySelector('body');
// const mainBtn = document.getElementById("main-btn");

// console.log(mainBtn);
// const mainBtn2 = document.querySelector("#main-btn");

// console.log(mainBtn2);

const changeText = (event) => {
  console.log(event);
  if (event.target.id === "main-btn") {
    document.querySelector('#text').innerHTML = "You clicked that button!";
  }

}

// mainBtn2.addEventListener('click', changeText);

// here we are targeting the DOM and looking for a click, which will run the changeText function when clicked!
wholeBody.addEventListener('click', changeText);