var drinksSearched = [];
var drinksSearchedLocal =
  JSON.parse(localStorage.getItem("drinksSearched")) || [];

//$(document).ready(function() {
//$("#random").empty();
//$("#ingred").empty();
//$("#cocktail").empty();
//if (drinksSearchedLocal !== null) {
//drinksSearched = drinksSearchedLocal || [];
//};



document.getElementById("submit-button").addEventListener("click", handleSearchFormSubmit);
var inputdrinkText = document.getElementById("inputdrink").value;

function handleSearchFormSubmit(event) {
  event.preventDefault();
  var inputdrinkText = document.getElementById("inputdrink").value;
console.log(inputdrinkText);
  searchURL =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + inputdrinkText;
  fetch(searchURL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      console.log(data);
      displayCocktail(data);
    })
    .catch((error) => badDrinkName());
    //console.error("FETCH ERROR:", error));

  function displayCocktail(data) {
    var cocktail = data.drinks[0];

    //if (data.Drinks[0] == null) {
    //    badDrinkName();
  //}
    const cocktailPage = document.getElementById("cocktail");
    cocktailPage.setAttribute("class", "bg-success text-white");
    const cocktailName = cocktail.strDrink;
    const heading = document.createElement("p");
    heading.innerHTML = cocktailName + '  ingredients:';
    cocktailPage.appendChild(heading);
    drinksSearched.push.cocktailName;
    localStorage.setItem("drinksSearched", JSON.stringify(drinksSearched));
    

    const cocktailIngredients = document.createElement("ul");
    cocktailIngredients.setAttribute("class", "list-unstyled");
    cocktailPage.appendChild(cocktailIngredients);

    const getIngredients = Object.keys(cocktail) //these filter/reduce functions return only actual ingredients,
      .filter(function (ingredient) {            //as Drinks.ingredients has 15 entries, some of which are null
        return ingredient.indexOf("strIngredient") == 0; //credit w3collective.com/fetch-display-api-data-javascript
      })
      .reduce(function (ingredients, ingredient) {
        if (cocktail[ingredient] != null) {
          ingredients[ingredient] = cocktail[ingredient];
        }
        return ingredients;
      }, {});
 
    for (let key in getIngredients) {
      let value = getIngredients[key];
      listItem = document.createElement("li");
      listItem.setAttribute("class", "list-item");
      listItem.innerHTML = value;
      cocktailIngredients.appendChild(listItem);
    }
    cocktailInstructions = document.createElement("p");
    cocktailInstructions.innerHTML = cocktail.strInstructions;
    cocktailPage.appendChild(cocktailInstructions);
    
    const cocktailImg = document.createElement("img");
    cocktailImg.setAttribute("width", "200");
    cocktailImg.setAttribute("height", "200");
    cocktailImg.src = cocktail.strDrinkThumb;
    cocktailPage.appendChild(cocktailImg);
<<<<<<< HEAD
    
=======

const getIngredients = Object.keys(cocktail)                   //these filter/reduce functions return only actual ingredients, 
    .filter(function (ingredient) {                         //as Drinks.ingredients has 15 entries, some of which are null 
      return ingredient.indexOf("strIngredient") == 0;      //credit w3collective.com/fetch-display-api-data-javascript
    })
    .reduce(function (ingredients, ingredient) {
      if (cocktail[ingredient] != null) {
        ingredients[ingredient] = cocktail[ingredient];
      }
      return ingredients;
    }, {});


  for (let key in getIngredients) {
    let value = getIngredients[key];

}
  
  var cocktailIngredients = ingredients;

    listItem = document.createElement("li");
    listItem.innerHTML = value
    cocktailIngredients.appendChild(listItem);
   

  }
>>>>>>> main
}
  }
function badDrinkName() {
 var modal = $("#error-modal");
 var close = $("#close-btn");
 var message = $("#error-message")
modal.style.display = "block";
var message = `<p>Your drink name is not found.</p>`
close.onclick = function() {
modal.style.display = "none";
}
$("#inputdrink").empty();
//return;                          ????to get back to the document ready function???
}