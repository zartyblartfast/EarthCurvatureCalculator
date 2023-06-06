window.onload = function() {
    const R = 6371000; // Earth radius in meters
    const C = 2 * Math.PI * R; // Earth's circumference in meters

    const form = document.getElementById('calc-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const h1 = parseFloat(document.getElementById('h1').value);
        const L0 = parseFloat(document.getElementById('l0').value);

        // Calculate d1, d2, and d0
        const d1 = Math.sqrt(2 * h1 * R);
        const d2 = L0 - d1;
        const d0 = d1 + d2;

        // Calculate the fraction of the Earth's circumference that BX represents
        const BOX_fraction = d2 / C;

        // Calculate the angle at BOX in radians
        const BOX_angle = 2 * Math.PI * BOX_fraction;

        // Calculate BC and OC
        const BC = R / Math.sin(BOX_angle);
        const OC = R / Math.cos(BOX_angle);

        // Calculate XC
        const XC = OC - R;

        // Display the results
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `
            <p>d1: ${d1} meters</p>
            <p>d2: ${d2} meters</p>
            <p>d0: ${d0} meters</p>
            <p>h2: ${XC} meters</p>
        `;
    });
};
