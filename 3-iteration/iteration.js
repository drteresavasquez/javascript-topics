
const word = "Engineer";
const team = [
  {
    id: 1,
    name: "Dr. T",
    email: "drt@drt.com",
    favoriteColor: "red",
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
];

// console.log(team.length);

// // FOR LOOP 
// for (let index = 0; index < team.length; index++) {
//   console.log(team[index]);
// }

// // FOR OF LOOP
// for (const letter of word) {
//   console.log(letter);
// }

// for (const instructor of team) {
//   console.log(instructor.name);
// }

// // FOR EACH LOOP ONLY FOR ARRAYS
team.forEach((memberObj) => {
  console.log(memberObj.name);
});

// TARGETING ELEMENTS ON THE DOM
const app = document.querySelector("#app");
app.innerHTML = "Hello World!"

// CHALLENGE: Loop over team and put the names of the instructors on the DOM
