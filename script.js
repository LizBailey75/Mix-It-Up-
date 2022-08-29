var subbtnEl = document.getElementById('choose-button')

subbtnEl.addEventListener('click', getRandomCocktail)

//retrieve random drink
function getRandomCocktail(event) {
    event.preventDefault();
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php'
    )
        .then((Response) => Response.json())

        .then((cocktailData) => {
            console.log(cocktailData)
         
            displayRandomCocktail(cocktailData)
        })

        .catch(error =>
            console.log(error)
        )
}
//display image
function displayRandomCocktail(cocktailData) {
    var drinks = cocktailData;
    var cocktailpictureElement = document.getElementById('randompic');
    
    cocktailpictureElement.setAttribute("src" , cocktailData.drinks[0].strDrinkThumb);
   
   
    //display title
    var cocktailTitleElement = document.getElementById('cocktailTitle');

    //var cocktailTitle = 'src = cocktail.drinks[0].strDrink' + 
    //'Type of glass: ' + 'src = cocktalData.drinks[0].strGlass';
    
    console.log(cocktailTitleElement.setAttribute("src", cocktailData.drinks[0].strDrink));

    cocktailTitleElement.innerHTML = cocktailTitleElement.setAttribute("src", cocktailData.drinks[0].strDrink);








    
    //display ingredients
    var cocktailInfoElement = document.getElementById('howTo');

    let result = '';
    for (var i = 1; i <= 15; i++) {
        let measures = 'strMeasure' + i;
        let ingridients = 'strIngredient' + i;
        if ((drinks[0][measures]) && (drinks[0][ingridients]) !== "") {
            result = result + ` <p>${drinks[0][measures]} ${drinks[0][ingridients]}</p>`;

            cocktailInfoElement.innerHTML = result;
        };
    }


    //display instructions
    var cocktailInstructionsElement = document.getElementById('instructions');
    let instructions = `
    </br><p>${drinks[0].strInstructions}</p>`;

    cocktailInstructionsElement.innerHTML = instructions;

}


//Function that creates html display
function displayinputvalue(cocktailData) {
    var { drinks } = cocktailData;
    var cocktailpictureElement = document.getElementById('cocktailPicture');
    var cocktailPicture = `
    <img class="drinkThumb" src= "${drinks[0].strDrinkThumb}">`;

    cocktailpictureElement.innerHTML = cocktailPicture;

    //display title
    var cocktailTitleElement = document.getElementById('cocktailTitle');

    var cocktailInfo = `
    <h4 class="cocktailName"> ${drinks[0].strDrink} </h4>
    <p class="typeOfglass">Type of glass:</p><p>${drinks[0].strGlass}</p>
    </br><p class="howToMake">How to make:</p>`

    cocktailTitleElement.innerHTML = cocktailInfo;


    //display ingredients
    var cocktailInfoElement = document.getElementById('howTo');

    let result = '';
    for (var i = 1; i <= 15; i++) {
        let measures = 'strMeasure' + i;
        let ingridients = 'strIngredient' + i;
        if ((drinks[0][measures]) && (drinks[0][ingridients]) !== "") {
            result = result + ` <p>${drinks[0][measures]} ${drinks[0][ingridients]}</p>`;

            cocktailInfoElement.innerHTML = result;
        };
    }


    //display instructions
    var cocktailInstructionsElement = document.getElementById('instructions');
    let instructions = `
    </br><p>${drinks[0].strInstructions}</p>`;

    cocktailInstructionsElement.innerHTML = instructions;
}