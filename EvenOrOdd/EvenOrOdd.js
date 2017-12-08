// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function even_or_odd(number) {
//     return number % 2 === 0 ? "Even" : "Odd";
//   }

//   function even_or_odd(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     }
//     else {
//         return "Odd";
//     }
//   }






function change(x) {
    
let y = x.replace(/-*_*/g, ' ');
let z = y.replace(/\w\S*/g, function(elem){
	return elem.charAt(0).toUpperCase() + elem.substr(1).toLowerCase();
});
	return a = z.replace(/\s+/g, "");
}
change('i-dont-care');

 