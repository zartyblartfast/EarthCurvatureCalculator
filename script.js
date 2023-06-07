window.onload = function() {
    const R = 6371000; // Earth radius in meters
    const C = 2 * Math.PI * R; // Earth's circumference in meters

    const form = document.getElementById('calc-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const h1 = parseFloat(document.querySelector("#h1").value);
        const l0 = parseFloat(document.querySelector("#l0").value) * 1000;

        // Calculate d1 and l2
        const d1 = Math.sqrt(2 * h1 * R);
        console.log("d1 = " + d1);
        //const d2 = l0 - d1;
        const l2 =  l0 - d1;
        console.log("l2 = " + l2);
        
        //const BOX_fraction = d2 / C;
        const BOX_fraction = l2 / C;
        
        // Calculate the angle at BOX in radians
        const BOX_angle = 2 * Math.PI * BOX_fraction;
        
        // If BOX_angle >= 90, the OX radius will be parallel with the BC tangent and further calculations will error/overflow
        if (BOX_angle >= Math.PI / 2) {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = `
                <p>Error: Infinite, non-calculable result. Please adjust your h1 and/or L0 inputs.</p>
            `;
            return;
        }

        // Calculate BC and OC  
        const OC = R / Math.cos(BOX_angle);
        console.log("OC = " + OC);
        const BC = OC * Math.sin(BOX_angle);
        console.log("BC = " + BC);
        
        // Check if BC goes negative
        if (BC <= 0) {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = `
                <p>Error: The total distance (L0) must be greater than the observer's distance to the horizon (d1).</p>
            `;
            return;
        }
        
        // Calculate XC
        const XC = OC - R;
        console.log("XC = " + XC);
        const d0 = d1 + BC
        console.log("d0 = " + d0);
        
        // Display the results
        const resultsDiv = document.getElementById('results');
        console.log('Displaying results...');
        resultsDiv.innerHTML = `
            <p>d1: ${(d1 / 1000).toFixed(1)} km</p>
            <p>d2: ${(BC / 1000).toFixed(3)} km</p>
            <p>d0: ${(d0 / 1000).toFixed(3)} km</p>
            <p>h2: ${(XC / 1000).toFixed(1)} km</p>
        `;
    });
};
