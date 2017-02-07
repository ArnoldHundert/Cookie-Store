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
// 	1. Grab a cookie flavor, which increments their cookie count by one.
// 	2. Come back to the page and see how many cookies they've grabbed so far.
// 	3. Clear their cookie count completely in case they're feeling guilty.


window.addEventListener("load",function(){
	myFunction();
	function myFunction() {
		if (isNaN(Cookies.get("Sugar")) == true){
			Cookies.set("Sugar", "0", "expires=Wed, 15 Mar 2022 11:23:41 UTC");
		}
		if (isNaN(Cookies.get("Chocolate")) == true){
			Cookies.set("Chocolate", "0", "expires=Wed, 15 Mar 2022 11:23:41 UTC");
		}
		if (isNaN(Cookies.get("Lemon")) == true){
			Cookies.set("Lemon", "0", "expires=Wed, 15 Mar 2022 11:23:41 UTC");
		}
		showOrderFunction();
	}
	function showOrderFunction() {
		document.getElementById("sugarOrder").innerHTML = Cookies.get("Sugar");
		document.getElementById("chocolateOrder").innerHTML = Cookies.get("Chocolate");
		document.getElementById("lemonOrder").innerHTML = Cookies.get("Lemon");
		document.getElementById("sugarAmt").focus();
	}
	document.getElementById("orderInput").addEventListener("click", function(){
		var sugarCookieOrder = parseInt(document.getElementById("sugarAmt").value);
		var chocolateCookieOrder = parseInt(document.getElementById("chocolateAmt").value);
		var lemonCookieOrder = parseInt(document.getElementById("lemonAmt").value);
		if (isNaN(sugarCookieOrder) == false) {
			var oldSugarNum = parseInt(Cookies.get("Sugar"));	// Get old order amount
			var newSugarOrderAmt = sugarCookieOrder + oldSugarNum;	// Add it to new order amount
			Cookies.set("Sugar", newSugarOrderAmt);	// Set cookie to new order value
			showOrderFunction();	// Run function to update order amount in display
		}
		if (isNaN(chocolateCookieOrder) == false) {
			var oldchocolateNum = parseInt(Cookies.get("Chocolate"));	// Get old order amount
			var newChocolateOrderAmt = chocolateCookieOrder + oldchocolateNum;	// Add it to new order amount
			Cookies.set("Chocolate", newChocolateOrderAmt);	// Set cookie to new order value
			showOrderFunction();	// Run function to update order amount in display
		}
		if (isNaN(lemonCookieOrder) == false) {
			var oldlemonNum = parseInt(Cookies.get("Lemon"));	// Get old order amount
			var newLemonOrderAmt = lemonCookieOrder + oldlemonNum;	// Add it to new order amount
			Cookies.set("Lemon", newLemonOrderAmt);	// Set cookie to new order value
			showOrderFunction();	// Run function to update order amount in display
		}

		document.getElementById("sugarAmt").value = "";
		document.getElementById("chocolateAmt").value = "";
		document.getElementById("lemonAmt").value = "";
		document.getElementById("sugarAmt").focus();
	})
	document.getElementById("clrOrderInput").addEventListener("click", function(){
		Cookies.set("Sugar", "0", "expires=Wed, 15 Mar 2022 11:23:41 UTC");
		Cookies.set("Chocolate", "0", "expires=Wed, 15 Mar 2022 11:23:41 UTC");
		Cookies.set("Lemon", "0", "expires=Wed, 15 Mar 2022 11:23:41 UTC");
		myFunction();
	})
	document.getElementById("sugarPlusOne").addEventListener("click", function(){
		var oldSugarNum = parseInt(Cookies.get("Sugar"));	// Get old order amount
		var newSugarOrderAmt = oldSugarNum + 1;	// Add 1 to it
		Cookies.set("Sugar", newSugarOrderAmt);	// Set cookie to new order value
		showOrderFunction();	// Run function to update order amount in display
	})
	document.getElementById("chocolatePlusOne").addEventListener("click", function(){
		var oldchocolateNum = parseInt(Cookies.get("Chocolate"));	// Get old order amount
		var newChocolateOrderAmt = oldchocolateNum + 1;	// Add 1 to it
		Cookies.set("Chocolate", newChocolateOrderAmt);	// Set cookie to new order value
		showOrderFunction();	// Run function to update order amount in display
	})
	document.getElementById("lemonPlusOne").addEventListener("click", function(){
		var oldLemonNum = parseInt(Cookies.get("Lemon"));	// Get old order amount
		var newLemonOrderAmt = oldLemonNum + 1;	// Add 1 to it
		Cookies.set("Lemon", newLemonOrderAmt);	// Set cookie to new order value
		showOrderFunction();	// Run function to update order amount in display
	})
})  











