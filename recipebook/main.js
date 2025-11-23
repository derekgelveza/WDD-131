import recipes from './recipes.mjs';


function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}


function getRandomListEntry(list) {
    return list[getRandomNumber(list.length)];
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating
            ? `<span aria-hidden="true" class="icon-star">⭐</span>`
            : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
    html += `</span>`;
    return html;
}


function recipeTemplate(recipe) {
    return `
        <div class="recipe-card">
            <div class="recipe-img">
                <img src="${recipe.image}" alt="Image of ${recipe.name}">
            </div>
            <div class="recipe-card-content">
                <ul class="recipe-type">
                    ${recipe.tags.map(tag => `<li>${tag}</li>`).join('')}
                </ul>
                <h2 id="food-type">${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p id="description">${recipe.description}</p>
            </div>
        </div>
    `;
}


function renderRecipes(recipeList) {
    const container = document.querySelector('.recipes-container');
    container.innerHTML = recipeList.map(recipeTemplate).join('');
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}


function searchHandler(event) {
    event.preventDefault();
    const query = document.querySelector('#search').value.toLowerCase();

    const filtered = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(query);
        const descMatch = recipe.description.toLowerCase().includes(query);
        const tagsMatch = recipe.tags.find(tag => tag.toLowerCase().includes(query));
        const ingredientsMatch = recipe.recipeIngredient.find(ing => ing.toLowerCase().includes(query));
        return nameMatch || descMatch || tagsMatch || ingredientsMatch;
    });

    filtered.sort((a, b) => a.name.localeCompare(b.name));

    renderRecipes(filtered);
}


document.querySelector('#submit-img').addEventListener('click', searchHandler);

init();
