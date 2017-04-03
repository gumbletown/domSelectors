/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
 * Answer the following questions.
 * Remember that a funciton is written like this:

	function insertnamehere(){
 		$('.classname').hide();
 	}

 * When answering the questions below, DON'T copy and 
 * paste the code above. Get into a habit of writing 
 * functions yourself, as you'll use them a lot!

 */



/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the color to blue.
 */

$(".actions").click(function(){
	$("p").css("color", "blue");

});

/**
 * Question 2:
 * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
 * Hint: You can use the $(selector).html() method. Google it!
 */

$(".actions").click(function(){
	$("h2").html("Gumbot!");

});

/**
 * Question 3:
 * When button 1 is clicked, select the ordered list item that has the class "falseFact". 
 * Using jQuery change the content to read "True Fact".
 * Hint: Use the html() method again. You'll use it a lot today!
 */

$(".actions").click(function(){
	$(".falseFact").html("True Fact");

});


/**
 * Question 4: 
 * When button 2 is clicked, change the background color of the whole page to "pink"
 */

$("#button2").click(function(){
	$("body").css("background", "pink");

});


/**
 * Question 5:
 * When button 2 is clicked, change the color of all h2's to "green"
 */

$("#button2").click(function(){
	$("h2").css("color", "green");
});

/**
 * Question 6:
 * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */

$("#button2").click(function(){
	$("blockquote").html("<span>no quote</span>");

});

/**
 * Question 7:
 * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */

$("#button3").click(function(){
	$("h1").html("jQuery Ninja");

});

/**
 * Question 8:
 * Have the following code execute when button 3 is clicked. Write a JavaScript comment with a description of what happened. 
 * $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
 */

$("#button3").click(function(){
	$(".city").attr("src", "http://lorempixel.com/g/500/400/food");
});

/** what happened: we selected the img with the class of 'city' and changed the source from what's in the html doc to a random placeholder image url. 
*/

/**
 * Question 9:
 * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 * Bonus: Try to do this with only one jQuery call. $("selector").css({attribute: "value", attribute: "value"});
 */
$("#button3").click(function(){
	$("p").css({color: "blue", fontFamily: "Georgia"});
});

