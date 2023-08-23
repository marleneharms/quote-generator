const quoteContainer = document.getElementById("quoute-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// Show new quotes
function newQuote() {
  loading();
  // pick a random quote from apiQuotes array
  // const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]; // for local quotes
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (!quote.author) {
    authorText.textContent = "Unknown author";
  } else {
    authorText.textContent = quote.author;
  }

  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  // set the quote, hide loader
  quoteText.textContent = quote.text;
  complete();
}

// Get Quotes From API
async function getQuotes() {
  loading();
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl); // Get Quotes
    apiQuotes = await response.json(); // JSON response
    newQuote();
  } catch (e) {
    alert(error);
  }
}

function teetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank"); // Open Twitter in a new window
}

// Even Listener

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", teetQuote);

getQuotes();
