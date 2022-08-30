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



document.getElementById("submit-button");
  .addEventListener("click", handleSearchFormSubmit);
var inputdrinkText = document.getElementById("inputdrink").value;

function handleSearchFormSubmit(event) {
  event.preventDefault();
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
    .catch((error) => console.error("FETCH ERROR:", error));

  function displayCocktail(data) {
    var cocktail = data.drinks[0];

    //if (data.Drinks[0] == null) {
    //    badDrinkName();
    //}
    const cocktailPage = document.getElementById("cocktail");
    cocktailPage.setAttribute("class", "bg-success text-white");
    const cocktailName = cocktail.strDrink;
    const heading = document.createElement("p");
    heading.innerHTML = cocktailName;
    cocktailPage.appendChild(heading);
    drinksSearched.push.cocktailName;
    localStorage.setItem("drinksSearched", JSON.stringify(drinksSearched));
    //could i do lines 45-47 with var heading = `<p>cocktailName</p>`

    const cocktailIngredients = document.createElement("ul");
    cocktailPage.appendChild(cocktailIngredients);

    const getIngredients = Object.keys(cocktail) //these filter/reduce functions return only actual ingredients,
      .filter(function (ingredient) {
                                                  //as Drinks.ingredients has 15 entries, some of which are null
        return ingredient.indexOf("strIngredient") == 0; //credit w3collective.com/fetch-display-api-data-javascript
      })
      .reduce(function (ingredients, ingredient) {
        if (cocktail[ingredient] != null) {
          ingredients[ingredient] = cocktail[ingredient];
        }
        return ingredients;
      }, {});
    //    var getMeasure = Object.keys(cocktail)
    //    .filter(function (measure) {
    //        return measure.indexOf("strMeasure") == 0;
    //    })
    //    .reduce(function (measures, measure) {
    //        if (cocktail[ingredient] != null) {
    //            measures[measure] = cocktail[measure];
    //    }
    //    return measures;
    //}, {});
    for (let key in getIngredients) {
      let value = getIngredients[key];
      // for (let key in getMeasure) {
      //   let value = getMeasure[key];
      //}
      listItem = document.createElement("li");
      listItem.innerHTML = value;
      cocktailIngredients.appendChild(listItem);
      //(cocktailMeasure + cocktailIngredients).appendChild(listItem);
    }

    var cocktailInstructions = document.createElement("p");
    cocktailPage.appendChild(cocktail.strInstructions);

    var cocktailImg = document.createElement("img");
    cocktailImg.src = cocktail.strDrinkThumb;
    cocktailPage.appendChild(cocktailImg);
  }
}

//function badDrinkName() {
//   var modal = $("#error-modal");
//   var close = $("#close-btn");
// var message = $("#error-message")
//modal.style.display = "block";
//var message = `<p>Your drink name is not found.</p>`
//close.onclick = function() {
//modal.style.display = "none";
//}
//$("#inputdrink").empty();
//return;                          ????to get it back to the document ready function???
//{
