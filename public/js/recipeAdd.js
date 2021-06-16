const newFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the form
    const category = document.querySelector('[name="category"]').value;
    const recipeURL = document.querySelector('[name="recipeURL"]').value;

    if (!category && !recipeURL) {
        console.log('missing cat or url');
        return;
    }
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/recipe/add`, {
        method: 'POST',
        body: JSON.stringify({
            category,
            recipeURL,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.recipeAdd-form').addEventListener('submit', newFormHandler);
