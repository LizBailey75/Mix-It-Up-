var ingredientSearched = [];
var ingredientSearchedLocal =
  JSON.parse(localStorage.getItem("ingredientSearched")) || [];

  

document.getElementById("ingred-button").addEventListener("click", handleSearchFormSubmit);
var inputIngredText = document.getElementById("inputingred").value;

function handleSearchFormSubmit(event) {
  event.preventDefault();
  var inputIngredText = document.getElementById("inputingred").value;
console.log(inputIngredText);
  searchIngredURL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + inputIngredText;
    
  fetch(searchIngredURL)
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
    var cocktail = data.drinks;
    //if (data.Drinks[0] == null) {
    //    badDrinkName();
  //}
    console.log(cocktail);

    const cocktailPage = document.getElementById("ingredcard");
    cocktailPage.setAttribute("class", "bg-success text-white");
    const ingredientName = inputIngredText;
    const heading = document.createElement("p");
    heading.innerHTML = 'Suggested for you';
    cocktailPage.appendChild(heading);
    ingredientSearched.push.ingredientName;
    localStorage.setItem("ingredientSearched", JSON.stringify(ingredientSearched));

    
    const cocktailSuggestions = document.createElement("ul");
    cocktailSuggestions.setAttribute("class", "list-unstyled");
    cocktailPage.appendChild(cocktailSuggestions);

    for  (i= 0; i < 4; i++) {
        var suggestion = data.drinks[i].strDrink;
        listItem = document.createElement("li");
        listItem.setAttribute("class", "list-item");
        listItem.innerHTML = suggestion;
        cocktailPage.appendChild(listItem);
    }
  
    for (i= 0; i < 4; i++) {
    const cocktailImg = document.createElement("img");
    cocktailImg.setAttribute("width", "200");
    cocktailImg.setAttribute("height", "200");
    cocktailImg.src = cocktail[i].strDrinkThumb;
    cocktailPage.appendChild(cocktailImg);
    }
  }
}
//function badDrinkName() {
 //   var modal = $("#error-modal");
//    var close = $("#close-btn");
 //   var message = $("#error-message")
//   modal.style.display = "block";
//   var message = `<p>Your drink name is not found.</p>`
//   close.onclick = function() {
 //  modal.style.display = "none";
//   }
 //  $("#inputdrink").empty();
   //return;                          ????to get back to the document ready function???
  // }