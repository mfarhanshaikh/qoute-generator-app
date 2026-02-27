const quoteEl  = document.querySelector("#quote");
const authorEl = document.querySelector("#author");
const quoteBtn = document.querySelector("#new-quote-btn");

async function getQuote() {

  quoteBtn.classList.add("loading");
  quoteEl.classList.add("fade-out");
  authorEl.classList.add("fade-out");

  const url = "https://dummyjson.com/quotes";

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network response was not ok");

    const data      = await res.json();
    const quoteArray  = data.quotes;
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    const randomQuote = quoteArray[randomIndex];

    await new Promise(r => setTimeout(r, 300));

    quoteEl.textContent  = `"${randomQuote.quote}"`;
    authorEl.textContent = `— ${randomQuote.author}`;

  } catch (error) {
    await new Promise(r => setTimeout(r, 300));
    quoteEl.textContent  = "Oops! Quotes could not be loaded.";
    authorEl.textContent = "";
    console.log("Error details:", error);
  } finally {
    quoteEl.classList.remove("fade-out");
    authorEl.classList.remove("fade-out");
    quoteBtn.classList.remove("loading");
  }
}

quoteBtn.addEventListener("click", getQuote);
getQuote();