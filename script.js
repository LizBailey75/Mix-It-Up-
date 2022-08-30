var subbtnEl = document.getElementById('choose-button')

subbtnEl.addEventListener('click', getRandomCocktail)

//retrieve random drink
function getRandomCocktail(event) {
    event.preventDefault();

    const cocktailPage = document.getElementById("random");
    cocktailPage.setAttribute("class", "bg-success text-white");
    
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
   
    console.log(cocktailData.drinks[0].strDrink);

    cocktailTitleElement.innerHTML = cocktailData.drinks[0].strDrink;
   

    //display glass
    var cocktailGlassElement = document.getElementById('cocktailGlass');

    console.log(cocktailData.drinks[0].strGlass)

    cocktailGlassElement.innerHTML = cocktailData.drinks[0].strGlass;


    //display ingredients
    var cocktailInfoElement = document.getElementById('howTo');

    var result = '';
    for (var i = 0; i <= 15; i++) {
        var measures = 'strMeasure' + i;
        var ingredients = 'strIngredient' + i;
        if ((cocktailData.drinks[0].measures) && (cocktailData.drinks[0].ingridients) !== "") {
            result = result + ` <p>${cocktailData.drinks[0].measures} ${cocktailData.drinks[0].ingridients}</p>`;

            cocktailInfoElement.innerHTML = result;
        };
    }


    //display instructions
    var cocktailInstructionsElement = document.getElementById('instructions');
    let instructions = `
    </br><p>${cocktailData.drinks[0].strInstructions}</p>`;

    cocktailInstructionsElement.innerHTML = instructions;

}


