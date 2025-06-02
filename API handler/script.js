// script.js
const testApiBtn = document.getElementById('test-api-btn');
const resultsContainer = document.getElementById('results-container');

testApiBtn.addEventListener('click', async () => {
    try {
        const productsWithDefects = await validateProductData();
        renderResults(productsWithDefects);
    } catch (error) {
        console.error(error.message);
    }
});

async function validateProductData() {
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url);

    // Verify server response code
    if (response.status !== 200) {
        throw new Error(`Expected 200, but got ${response.status}`);
    }

    const products = await response.json();
    const productsWithDefects = [];

    products.forEach((product) => {
        const defects = [];

        // Confirm presence of attributes
        if (!product.title) {
            defects.push("title is empty");
        }
        if (product.price < 0) {
            defects.push("price is negative");
        }
        if (product.rating.rate > 5) {
            defects.push("rating.rate exceeds 5");
        }

        if (defects.length > 0) {
            productsWithDefects.push({ product, defects });
        }
    });

    return productsWithDefects;
}

function renderResults(productsWithDefects) {
    resultsContainer.innerHTML = '';
    if (productsWithDefects.length > 0) {
        productsWithDefects.forEach((product) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const titleSpan = document.createElement('span');
            titleSpan.textContent = `Product: ${product.product.title}`;

            const defectsList = document.createElement('ul');
            product.defects.forEach((defect) => {
                const defectLi = document.createElement('li');
                defectLi.classList.add('defect');
                defectLi.textContent = defect;
                defectsList.appendChild(defectLi);
            });

            productDiv.appendChild(titleSpan);
            productDiv.appendChild(defectsList);
            resultsContainer.appendChild(productDiv);
        });
    } else {
        const noDefectsSpan = document.createElement('span');
        noDefectsSpan.textContent = 'No defects found in product data.';
        resultsContainer.appendChild(noDefectsSpan);
    }
}