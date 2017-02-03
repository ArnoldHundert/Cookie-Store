// Cookies Workshop: Individual
// Goal:

// To demonstrate understanding of setting and retrieving cookie data.

// Assignment:

// Imagine you're running a confectionary that serves 3 types of (edible) cookies: sugar, chocolate, and
// lemon. This confectionary serves these cookies as values stored inside of a browser cookie, which is far
// less satisfying, but the users of the confectionary still find value in it for some reason. Like most
// startups, we'll find the customers and profit later!

// Create a simple front-end website where users can decide how many cookies that they'd like to eat of each
// flavor. Once they indicate this, which could be by clicking on an item on screen or by submitted a form,
// store this value inside of several browser cookies, which specify the type of confectionary cookies as the
// key and the amount of confectionary cookies eaten so far as a value.

// Grading criteria:

// * Thoughtful styling added
// * Interactive and fun for the user to use
// * A user should be able to:
// * Grab a cookie flavor, which increments their cookie count by one
// * Come back to the page and see how many cookies they've grabbed so far
// * Clear their cookie count completely in case they're feeling guilty


window.addEventListener("load",function(){
	myFunction();
	function myFunction() {
		document.getElementById("sugarAmt").focus();

		Cookies.set("Sugar", "0");
		Cookies.set("Chocolate", "0");
		Cookies.set("Lemon", "0");

		document.getElementById("sugarOrder").innerHTML = Cookies.get("Sugar");
		document.getElementById("chocolateOrder").innerHTML = Cookies.get("Chocolate");
		document.getElementById("lemonOrder").innerHTML = Cookies.get("Lemon");
	}
	document.getElementById("usrInput").addEventListener("click", function(){
		// var sugarCookie = parseInt(document.getElementById("sugarAmt").innerHTML);
		// var chocolateCookie = parseInt(document.getElementById("chocAmt").innerHTML);
		// var lemonCookie = parseInt(document.getElementById("lemAmt").innerHTML);

	// 	if(!Cookies.get("Sugar")) {
	// 		Cookies.set("Sugar", sugarCookie);
	// 	}else{
	// 		Cookies.set("Sugar", parseInt(Cookies.get("Sugar")) + sugarCookie);
	// 	}
	// })
	// document.getElementById("usrInput").addEventListener("click", function(){

	})
})  



