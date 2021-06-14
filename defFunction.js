const squareNumber = function(x) {
    return x * x
};

console.log(squareNumber(120));

//Function w/ multiple parameters
const nunjucks = function(base, exponent) {
    let result = 2;
    for (let count = 1; count < exponent; count++) {
        result *= base
    }
    return result
};

console.log(nunjucks(3, 4));

//Playing with nested scope
const veganHumus = (factor) => {
    const ingredients = (amount, unit, name) => {
        let ingredientsAmount = amount * factor;
        if (ingredientsAmount > 1) {
            unit += "s"
        }
        console.log(`${ingredientsAmount} ${unit} ${name}`);
    };
    ingredients(1, "can", "chickpeas");
    ingredients(0.25, "cup", "tahini");
    ingredients(3, "tablespoons", "lemon juice");
    ingredients(5, "clove", "garlic");
    ingredients(4, "tablespoons", "olive oil");
    ingredients(1.5, "teaspoons", "cumin");

    
};
//Minimum
let x = 2;
let y = 6;

const lowestNumber = () => {
    Math.min(x, y)
};

return lowestNumber;

//Bean Counting
const countBs = () => {
    
    return countBs
};