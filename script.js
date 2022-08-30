var subbtnEl = document.getElementById('choose-button')

//subbtnEl.addEventListener('click', document.location.reload(false));

subbtnEl.addEventListener('click', getRandomCocktail);

//retrieve random drink
function getRandomCocktail(event) {
    event.preventDefault();

    document.getElementById('ingredients').remove();
    var ULelement = document.createElement('ul');
    ULelement.setAttribute('id', 'ingredients');
    var instructionsElem = document.getElementById('instructions');
    
    document.getElementById('random').insertBefore(ULelement, instructionsElem);
           

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
    var cocktailInfoElement = document.getElementById('ingredients');


    for (var i = 0; i < cocktailData.drinks.length; i++ ) {
        if (cocktailData.drinks[i].strIngredient1 !== null) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(cocktailData.drinks[i].strMeasure1 + ' ' + cocktailData.drinks[i].strIngredient1);
            node.appendChild(textnode);
            document.getElementById("ingredients").appendChild(node);
        }
    
        if (cocktailData.drinks[i].strIngredient2 !== null) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(cocktailData.drinks[i].strMeasure2 + ' ' + cocktailData.drinks[i].strIngredient2);
            node.appendChild(textnode);
            document.getElementById("ingredients").appendChild(node);
        }
   
        if (cocktailData.drinks[i].strIngredient3 !== null) {
            var node = document.createElement("li");
            var textnode = document.createTextNode((cocktailData.drinks[i].strMeasure3 ? cocktailData.drinks[i].strMeasure3 + ' ' : '') + cocktailData.drinks[i].strIngredient3);
            node.appendChild(textnode);
            document.getElementById("ingredients").appendChild(node);
        }
   
        if (cocktailData.drinks[i].strIngredient4 !== null) {
            var node = document.createElement("li");
            var textnode = document.createTextNode((cocktailData.drinks[i].strMeasure4 ? cocktailData.drinks[i].strMeasure4 + ' ' : '') + cocktailData.drinks[i].strIngredient4);
            node.appendChild(textnode);
            document.getElementById("ingredients").appendChild(node);
        }
   
        if (cocktailData.drinks[i].strIngredient5 !== null) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(cocktailData.drinks[i].strMeasure5 + ' ' + cocktailData.drinks[i].strIngredient5);
            node.appendChild(textnode);
            document.getElementById("ingredients").appendChild(node);
        }
   
        if (cocktailData.drinks[i].strIngredient6 !== null) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(cocktailData.drinks[i].strMeasure6 + ' ' + cocktailData.drinks[i].strIngredient6);
            node.appendChild(textnode);
            document.getElementById("ingredients").appendChild(node);
        }
   
        if (cocktailData.drinks[i].strIngredient7 !== null) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(cocktailData.drinks[i].strMeasure7 + ' ' + cocktailData.drinks[i].strIngredient7);
            node.appendChild(textnode);
            document.getElementById("ingredients").appendChild(node);
        }
   
        if (cocktailData.drinks[i].strIngredient8 !== null) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(cocktailData.drinks[i].strMeasure8 + ' ' + cocktailData.drinks[i].strIngredient8);
            node.appendChild(textnode);
            document.getElementById("ingredients").appendChild(node);
        }
    
        if (cocktailData.drinks[i].strIngredient9 !== null) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(cocktailData.drinks[i].strMeasure9 + ' ' + cocktailData.drinks[i].strIngredient9);
            node.appendChild(textnode);
            document.getElementById("ingredients").appendChild(node);
        }
    
        if (cocktailData.drinks[i].strIngredient10 !== null) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(cocktailData.drinks[i].strMeasure10 + ' ' + cocktailData.drinks[i].strIngredient10);
            node.appendChild(textnode);
            document.getElementById("ingredients").appendChild(node);
        }
    
        if (cocktailData.drinks[i].strIngredient11 !== null) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(cocktailData.drinks[i].strMeasure11 + ' ' + cocktailData.drinks[i].strIngredient11);
            node.appendChild(textnode);
            document.getElementById("ingredients").appendChild(node);
        }
    
        if (cocktailData.drinks[i].strIngredient12 !== null) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(cocktailData.drinks[i].strMeasure12 + ' ' + cocktailData.drinks[i].strIngredient12);
            node.appendChild(textnode);
            document.getElementById("ingredients").appendChild(node);
        }
    
        if (cocktailData.drinks[i].strIngredient13 !== null) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(cocktailData.drinks[i].strMeasure13 + ' ' + cocktailData.drinks[i].strIngredient13);
            node.appendChild(textnode);
            document.getElementById("ingredients").appendChild(node);
        }
    
        if (cocktailData.drinks[i].strIngredient14 !== null) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(cocktailData.drinks[i].strMeasure14 + ' ' + cocktailData.drinks[i].strIngredient14);
            node.appendChild(textnode);
            document.getElementById("ingredients").appendChild(node);
        }
    
        if (cocktailData.drinks[i].strIngredient15 !== null) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(cocktailData.drinks[i].strMeasure15 + ' ' + cocktailData.drinks[i].strIngredient15);
            node.appendChild(textnode);
            document.getElementById("ingredients").appendChild(node);
        }

 
        //display instructions
    var cocktailInstructionsElement = document.getElementById('instructions');
    let instructions = `
    </br><p>${cocktailData.drinks[0].strInstructions}</p>`;

    cocktailInstructionsElement.innerHTML = instructions;
    }}