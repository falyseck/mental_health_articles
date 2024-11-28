//  NewsAPI Key
const API_KEY = 'd86428b1f9734f9389419c4fa745a8f8';

// Elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const articlesContainer = document.getElementById('articles');

// Fetch Articles from NewsAPI
async function fetchArticles(query) {
    try {
        const response = await fetch(
            `https://newsapi.org/v2/everything?q=${query}&language=en&pageSize=10&apiKey=${API_KEY}`
        );
        const data = await response.json();

        if (data.status === "ok") {
            displayArticles(data.articles);
        } else {
            articlesContainer.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        articlesContainer.innerHTML = `<p>Failed to fetch articles. Please try again later.</p>`;
        console.error(error);
    }
}

// Display Articles
function displayArticles(articles) {
    articlesContainer.innerHTML = ""; // Clear previous results

    if (articles.length === 0) {
        articlesContainer.innerHTML = "<p>No articles found. Try another search.</p>";
        return;
    }

    articles.forEach(article => {
        const articleCard = document.createElement("div");
        articleCard.classList.add("article-card");

        articleCard.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;

        articlesContainer.appendChild(articleCard);
    });
}

// Event Listener for Search
searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchArticles(query);
    } else {
        articlesContainer.innerHTML = "<p>Please enter a search term.</p>";
    }
});
