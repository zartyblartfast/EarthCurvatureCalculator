window.onload = function() {
    const R = 6371000; // Earth radius in meters
    const C = 2 * Math.PI * R; // Earth's circumference in meters

    const form = document.getElementById('calc-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const h1 = parseFloat(document.querySelector("#h1").value);
        const l0 = parseFloat(document.querySelector("#l0").value) * 1000;

        // Calculate d1 and d2
        const d1 = Math.sqrt(2 * h1 * R);
        //const d2 = l0 - d1;
        const l2 =  l0 - d1;
        
        // Check if d2 is negative
        //if (d2 < 0) {
        //    const resultsDiv = document.getElementById('results');
        //    resultsDiv.innerHTML = `
        //        <p>Error: The total distance (L0) must be greater than the observer's distance to the horizon (d1).</p>
        //    `;
        //    return;
        //}

        // If d2 is not negative, continue with the calculations
        //const d0 = d1 + d2;

        // Calculate the fraction of the Earth's circumference that BX represents
        //const BOX_fraction = d2 / C;
        
        //const BOX_fraction = d2 / C;
        const BOX_fraction = l2 / C;
        
        // Calculate the angle at BOX in radians
        const BOX_angle = 2 * Math.PI * BOX_fraction;

        // Calculate BC and OC
        const BC = R / Math.sin(BOX_angle);
        const OC = R / Math.cos(BOX_angle);

        // Calculate XC
        const XC = OC - R;
        const d0 = d1 + BC
        
        // Display the results
        const resultsDiv = document.getElementById('results');
        console.log('Displaying results...');
        resultsDiv.innerHTML = `
            <p>d1: ${d1.toFixed(1)} meters</p>
            <p>d2: ${BC.toFixed(1)} meters</p>
            <p>d0: ${d0.toFixed(1)} meters</p>
            <p>h2: ${XC.toFixed(1)} meters</p>
        `;
    });
};
