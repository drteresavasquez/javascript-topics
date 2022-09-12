const pies = [
  {
    id: 1,
    name: "Dutch Apple Pie",
    ingredients: "apples,sugar,butter,nutmeg,dutch people",
    bakeTemp: 5000,
    drinkPairing: "Earl Grey Tea",
    imageUrl:
      "https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg",
    instructor: "Doc",
    iceCream: "Vanilla"
  },
  {
    id: 2,
    name: "Berry Pie",
    ingredients: "berries",
    bakeTemp: 400,
    drinkPairing: "wine",
    imageUrl:
      "https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg",
    instructor: "Doc",
    iceCream: "banana"
  },
  {
    id: 3,
    name: "Pumpkin Pie",
    ingredients: "pumpkins, nutmeg, cinnamon, graham crackers, pilgrims",
    bakeTemp: 42,
    drinkPairing: "egg nog",
    imageUrl:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg",
    instructor: "Aja",
    iceCream: "Vanilla"
  },
  {
    id: 4,
    name: "Shoo Fly Pie",
    ingredients: "Molasses, nutmeg, cinnamon, butter, graham cracker ",
    bakeTemp: 1234,
    drinkPairing: "Apple Cider",
    imageUrl:
      "https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg",
    instructor: "Aja",
    iceCream: "Coffee"
  },
  {
    id: 5,
    name: "Pecan Pie",
    ingredients: "Pecans, sugar, butter, flour",
    bakeTemp: 5000,
    drinkPairing: "Milk",
    imageUrl:
      "https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg",
    instructor: "Trinity",
    iceCream: "Vanilla"
  },
  {
    id: 6,
    name: "Keylime Pie",
    ingredients: "lemons, sugar, butter, flour",
    bakeTemp: 5000,
    drinkPairing: "Water",
    imageUrl:
      "https://www.browneyedbaker.com/wp-content/uploads/2012/05/key-lime-pie-2-1200.jpg",
    instructor: "Trinity",
    iceCream: "none"
  }
];

// Make sure EVERYTHING IS IN A FUNCTION
// target the DOM so that we can query dynamic elements
const targetDom = () => {
  document.querySelector("body").addEventListener('click', clickEvents)
}
// Render to DOM utility function
const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToRender;
};

// GET THE PIES ON THE DOM USING A BOOTSTRAP CARD
const piesOnDom = () => {
  let domString = "";
  for (const pie of pies) {
    // CARD FROM BOOTSTRAP: https://getbootstrap.com/docs/5.1/components/card/#example Removed the button
    domString += `<div class="card" style="width: 18rem;">
        <img src=${pie.imageUrl} class="card-img-top" alt=${pie.name}>
        <div class="card-body">
          <h5 class="card-title">${pie.name}</h5>
          <p class="card-text">${pie.ingredients}</p>
        </div>
        <button class="btn btn-danger" type="button" id="delete--${pie.id}">Delete</button>
      </div>`;
  };

  renderToDom("#pies", domString);
}

// Get a form on the DOM with a submit button
const formOnDom = () => {
  const form = `
  <form>
    <div class="mb-3">
      <label for="name" class="form-label">Pie Name</label>
      <input type="text" class="form-control" id="name" placeholder="Pie Name" required>
    </div>
    <div class="mb-3">
      <label for="instructor" class="form-label">Instructor</label>
      <input type="text" class="form-control" id="instructor" placeholder="Instructor Name" required>
    </div>
    <button class="btn btn-success" type="submit">Submit</button>
  </form>
  `;
  renderToDom("#form", form);
}

// The callback for events
const clickEvents = (e) => {
  // console.log(e.target.type);
  
  // HANDLE FORM EVENT: Add click event for form submit
  if (e.target.type === "submit") {
    // prevent the form from reloading
    e.preventDefault();

    // create an object of with the data from the form
    const newPie = {
      name: document.querySelector("#name").value,
      instructor: document.querySelector("#instructor").value,
    }
    // onsubmit, we want to grab the values to add them to the pies array
    console.log(newPie);

    // clear the form values
    const form = document.querySelector("form");
    form.reset();

    // push new object to array
    pies.push(newPie);

    // re-render the pies on the DOM 
    piesOnDom(pies)
  }

  // DELETE EVENT: Add click event for the Delete button
  if (e.target.id.includes("delete")) {
    // console.log(e.target.id);

    // destructure the id to be able to find the object to delete it
    const [, id] = e.target.id.split("--");
    // console.log(id);

    // Find the index of the pie
    const findPieIndex = pies.findIndex((pie) => pie.id === Number(id));
    // console.log(findPieIndex);

    // delete pie from the array
    pies.splice(findPieIndex, 1);

    // re-render pies on the DOM
    piesOnDom(pies);
  }
}

// Start the App
const init = () => {
  formOnDom();
  piesOnDom();
  targetDom();
}

init();