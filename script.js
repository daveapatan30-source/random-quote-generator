
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const statusElement = document.getElementById("status");
const quoteButton = document.getElementById("quoteButton");

async function getRandomQuote() {
    quoteButton.disabled = true;
    quoteButton.textContent = "Loading...";
    statusElement.textContent = "";

    try {
        const response = await fetch(
            "https://dummyjson.com/quotes/random"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        quoteElement.textContent = `"${data.quote}"`;
        authorElement.textContent = `— ${data.author}`;
    } catch (error) {
        quoteElement.textContent =
            "Sorry, no quote is available.";
        authorElement.textContent = "";
        statusElement.textContent =
            "Could not fetch data. Please check your internet and try again.";
    } finally {
        quoteButton.disabled = false;
        quoteButton.textContent = "Generate New Quote";
    }
}

quoteButton.addEventListener("click", getRandomQuote);
