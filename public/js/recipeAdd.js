const loadingIndicator = (toggle) => {
    document.querySelector('#submitBtn').classList.toggle('is-loading', toggle);
};

const newFormHandler = async (event) => {
    event.preventDefault();
    document.querySelector('.message').innerHTML = '';

    document.querySelector('#submitBtn').disabled = true;

    // Collect values from the form
    const category = document.querySelector('[name="category"]').value;
    const recipeUrl = document.querySelector('[name="recipeURL"]').value;
    loadingIndicator(true);

    if (!category && !recipeUrl) {
        console.log('missing cat or url');
        return;
    }
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/recipe/add`, {
        method: 'POST',
        body: JSON.stringify({
            category,
            recipeUrl,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    console.log(data);
    loadingIndicator(false);
    document.querySelector('#submitBtn').disabled = false;
    if (response.ok) {
        document.querySelector('.message').innerHTML = `
            You have added your recipe to your library. <a href="/recipe/${data.id}">View Recipe</a>
        `;
        event.target.reset();
        console.log('Success!');
    } else {
        document.querySelector('.message').innerHTML = `<span class="color: red"> ${response.statusText}</span>`;
    }
};

document.querySelector('.recipeAdd-form').addEventListener('submit', newFormHandler);
