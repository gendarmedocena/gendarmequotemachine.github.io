$(document).ready(function(){
  var randomQuote;
  var randomNum;
  var author;
  getQuote();
   
function getQuote() {
  //Made quotes array to global var
var quotes = ["''School told me what to do for a living. Work helped me earn a living. But God gave me a reason to live.''", "''Your ego is not your amigo''", "''Holding onto anger is like drinking poison and expecting the other person to die''", "''Live in such a way that if anyone were to speak badly of you, no one would believe it''", "''Just because you're trash doesn't mean you can't do great things. It's garbage can, not garbage cannot.''", "''The human brain is an amazing organ. It functions 24 hours a day from the day we are born and only stops when we are taking an exam''", "''A leader is one who knows the way, goes the way, and shows the way.''", "''Don't say you don't have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michaelangelo, Mother Teresa, Leonardo da Vinci, Thomas Jefferson, and Albert Einstein.''", "''Promise to all the Warriors fans.. we will figure this thing out.. if it's the last thing we do we will figure it out.''", "''If I'm wrong about God then I wasted my life. If you're wrong about God then you wasted your eternity.''", "''Character is doing the right thing when nobody is looking.''", "''Real love doesn't meet you at your best. It meets you in your mess.''", "''You don’t fall into love. You commit to it. Love is saying I will be there no matter what.''", "''Don’t just pretend to love others. Really love them. Hate what is wrong. Hold tightly to what is good.''"];
  
  
var author1 = ["-Lecrae, Christian Rapper", "-Unknown", "-Unknown", "-Unknown", "-Unknown", "-Unknown", "-John Maxwell", "-H. Jackson Brown", "-Stephen Curry, 2009", "-Lecrae, Christian Rapper", "-J.C. Watts", "-J.S. Park", "-Tim Keller, Christian Apologist", "-Apostle Paul, Romans 12:9"];

randomNum = Math.floor(Math.random()*quotes.length);
randomQuote = quotes[randomNum];
author = author1[randomNum];
$(".quote").text(randomQuote);
$(".author").text(author);    
}
  
   $('#tweet').on("click", function() {
  window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " " + author);
});

$("#newQuote").on("click", function() {
  getQuote();
});
               
});