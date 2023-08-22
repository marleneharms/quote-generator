const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// let apiQuotes = [];

// Show new quotes
function newQuote() {
  // pick a random quote from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
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
  quoteText.textContent = quote.text;
}

// Get Quotes From API
// async function getQuotes() {
//   const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
//   try {
//     const response = await fetch(apiUrl); // Get Quotes
//     apiQuotes = await response.json(); // JSON response
//     newQuote();
//   } catch (e) {
//     alert(error);
//   }
// }

// // On Load
// getQuotes();

function teetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank"); // Open Twitter in a new window
}

// Even Listener

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", teetQuote);

newQuote();
