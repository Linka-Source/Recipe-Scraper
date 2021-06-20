const newFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the form
    const category = document.querySelector('[name="category"]').value;
    const recipeUrl = document.querySelector('[name="recipeURL"]').value;
    const loadingIndicator = (toggle) => {
        document.querySelector('#submitBtn').classList.toggle('spinner', toggle);
    };

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

    console.log(response);

    if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('./dashboard');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.recipeAdd-form').addEventListener('submit', newFormHandler);
