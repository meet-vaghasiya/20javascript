const quoteContainer = document.getElementById("quote-container"); // user camel case naming
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// make sure all above is id  other wise its getting null element

// get quotes from api
let apiQuotes = [];

// function loader

//
function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}
//  create new quotes

function newQuote() {
  showLoadingSpinner();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  //if author quote is null than provide null

  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  // if quote length is not shorter

  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}

async function getQuotes() {
  showLoadingSpinner();
//   if you are getting cors error than url url with proxy url 
// const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

  const apiUrl = " https://type.fit/api/quotes"; //write in string

  try {
    // const response = await fetch(proxyUrl +apiUrl);
    const response = await fetch(apiUrl);
    apiQuotes = await response.json(); // because in api we get string so change into json

    newQuote();
  } catch (error) {
    // catch error here
    getQuotes() // if you are getting error in in api than its call another time and get quotes

    alert("something went wrong");
  }
}
// twite quote

function tweetQuote() {
  const twitterUrl = ` https://twitter.com/intent/tweet?text=${quoteText.textContent}  - ${authorText.textContent}`;

  window.open(twitterUrl, "_blank");
  // this will open window in new tab
}

// event listeners

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

getQuotes();
