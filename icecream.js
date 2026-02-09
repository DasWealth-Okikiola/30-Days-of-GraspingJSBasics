var flavour = "chocolate";
var vessel = "cone";
var toppings = "peanuts";

if ((flavour === "vanilla" || flavour === "chocolate") &&
    (vessel === "cone" || vessel === "bowl") &&
    (toppings === "sprinkles" || toppings === "peanuts")) {
    console.log(`I'd like two scoops of ${flavour} ice cream in a ${vessel} with ${toppings}`)
}