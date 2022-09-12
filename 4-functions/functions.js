const team = [
  {
    id: 1,
    name: "Dr. T",
    email: "drt@drt.com",
    favoriteColor: "purple",
    image: "https://avatars3.githubusercontent.com/u/29741570?s=460&u=16cc038bd4c459a12eb198fc313043cd37c80a64&v=4"
  },
  {
    id: 2,
    name: "Aja",
    email: "drt@drt.com",
    favoriteColor: "RED",
    image: "https://avatars3.githubusercontent.com/u/57641436?s=400&u=1383b4d27114c6c7e3f05d55a4b4ac536971316a&v=4"
  },
  {
    id: 3,
    name: "Trinity",
    email: "drt@drt.com",
    favoriteColor: "blue",
    image: "https://avatars1.githubusercontent.com/u/31781724?s=460&u=10531433afe0ed55948173fab061a75fc3ffa8c1&v=4"
  },
  {
    id: 1,
    name: "Christina",
    email: "drt@drt.com",
    favoriteColor: "Blue",
    image: "https://avatars3.githubusercontent.com/u/29741570?s=460&u=16cc038bd4c459a12eb198fc313043cd37c80a64&v=4"
  },
];

// Render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const renderCards = (array) => {
  let domString = "";
  for (const member of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${member.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${member.name}</p>
    </div>
  </div>`;
  }

  renderToDom("#app", domString);
}

renderCards(team);


// function to filter teammates with specific favorite color
const filter = (array, color) => {
  const colorArray = [];

  array.forEach((item) => {
    if (item.favoriteColor === color) {
      colorArray.push(item);
    }
  });

  return colorArray;
}

console.log(filter(team, "purple"));

// // put the team on the DOM
// const teamOnDom = (array) => {
//   let domString = "";

//   for (const item of array) {
//     domString += item.name;
//   }
//   renderToDom("#app", domString);
// }

