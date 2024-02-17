const apiURL = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

function copyQuote() {
  const quoteValue = quote.innerText;
  if (quoteValue !== "") {
    navigator.clipboard.writeText(quoteValue);
    const copyMessage = document.querySelector(".copied");
    copyMessage.style.display = "block";
    setTimeout(function () {
      copyMessage.style.display = "none";
    }, 2000);
  }
}

getQuote(apiURL);
