//1. Makin Bacon
/*Create a function named `moreContent` that will initiate the button after clicking on it.

The function will add the following content inside the paragraph with the id of `more`.
*/

var bacon = "Shoulder turducken brisket, kevin swine andouille tri-tip salami tail ham sausage pork loin. Ribeye short loin rump kielbasa pork. Capicola short loin turducken corned beef tongue, chuck leberkas salami frankfurter. Kielbasa fatback pancetta, ground round meatball turducken jowl ribeye alcatra sirloin bacon corned beef beef ribs short loin. Pork belly spare ribs biltong corned beef meatball short ribs tongue alcatra swine drumstick. Biltong shankle kevin, cupim sirloin bresaola brisket. Tail pork belly biltong ball tip tri-tip, pig jerky cow pastrami prosciutto ;ground round bacon capicola tongue meatball.";

var clickMsg= document.getElementById("one");
clickMsg.addEventListener('click', moreContent);

function moreContent(){
	var showAnswer=document.getElementById(
		"more");
	showAnswer.innerHTML= bacon;
}

//2. HTTP
/*Create a function named `lessContent` that will initiate the `Show Less` link after clicking on it.

The function will hide the contents in the pargraph with the id of `less` after clicking on the `Show Less` link.*/
var clickMsg= document.getElementById('noMore');
clickMsg.addEventListener('click', disappear);

function disappear(){
	var gone= document.getElementById('less');
	gone.innerHTML="";
}

//3. Tacocat, The Original Palindrome King
/*Create a function named `zoom` that will increase the font size of the paragraph with the id of `biggie` after hovering your mouse over it. Increae the font size to 150%*/
var biggerCat= document.getElementById("biggie");
biggerCat.addEventListener("mouseover", steroids);

function steroids(){
var increase = document.getElementById('biggie');{
if(increase.style.fontSize==="100%"){
increase.style.fontSize="150%";
 }else{ 
increase.style.fontSize="100%";
}
}
}
//4. McDonalds
/*Create a variable name menuItems and assign it an array of three of your favorite items at McDonald's.

Next, create a function named valueMenu that will display your favorite items in the paragraph the the id of `menu` after clicking on the showMenu paragraph.*/
var menuItems= ["Burger","Fries","Drink"];
var mcMenu= document.getElementById('showMenu');
mcMenu.addEventListener('click', valueMenu);

function valueMenu(){
	var dinner= document.getElementById('menu');
	dinner.innerHTML= menuItems;

}
//5. Gin.
/*Create a function named redFace that will change the paragraph text to red and a font size of 20px after clicking on the text.*/
var newText= document.getElementById('drink');
newText.addEventListener('click', redFace);

function redFace(){
var alcohol= document.getElementById("drink");
alcohol.style.color= "red";
}




//6. Peanut Butter Cup Oreos
/*Create a function `showPrice` that will add the price of `$5.55` inside the paragraph with the id `price` after hovering your mouse over the paragraph.*/
var oreoPrice = document.getElementById("oreo");
oreoPrice.addEventListener('mouseover', showPrice);

function showPrice(){
	var cashMoney= document.getElementById("price");
	   cashMoney.innerHTML= "$5.55";
	
}

//7. Mr. Buttons
/*Add an Event Listener to the button that will display `myQuote` inside the paragraph with the id of `displayQuote` after the button is clicked.*/
var myQuote = "Our lives are defined by opportunities; even the ones we miss.";
var activate= document.getElementById("Benjamin");
activate.addEventListener('click',text);

function text(){
	var showQuote= document.getElementById("displayQuote");
	showQuote.innerHTML=myQuote;
}


//8. Say It again, Randomly
/*Create a function that will generate a random quote from the variable below after clicking on the button.*/

var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance.", "For what it's worth, it's never too late to be whoever you want to be."];
var benButton= document.getElementById('random');
benButton.addEventListener('click', randomizer);

function randomizer(){
	var randomQuote= document.getElementById('displayQuotes');
	var rand= quotes[Math.floor(Math.random()* quotes.length)];
	randomQuote.innerHTML=rand;
}


//9. Unlock the Secret to Financial Freedom
/*Create an event listener that will show and hide the message when clickig on the button.
*/

var moneyButton = document.getElementById('showHide');
moneyButton.addEventListener('click', moneyTeam);

function moneyTeam(){
	var connectPic= document.getElementById('showmoney');
	if (connectPic.style.display==='none'){
		connectPic.style.display='block';
	}else{
		connectPic.style.display='none';
	}
}
moneyTeam();
