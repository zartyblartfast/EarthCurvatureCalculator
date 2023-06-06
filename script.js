window.onload = function() {
    // Get the form element
    const form = document.getElementById('calc-form');

    // Listen for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the form from being submitted normally
        event.preventDefault();

        // Get the distance input by the user
        const l0 = document.getElementById('l0').value;

        // Perform the Earth curvature calculations here
        // For now, we'll just log the input value
        console.log('L0 distance:', l0);

        // TODO: Add code here to calculate d1, d2, and h1

        // TODO: Add code here to display the results on the webpage
    });
};
