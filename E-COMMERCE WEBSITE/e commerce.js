// Sample product data (you would typically fetch this from a server or database)
const products = [
    { id: 1, name: 'Product 1', price: 20.99 },
    { id: 2, name: 'Product 2', price: 15.49 },
    { id: 3, name: 'Product 3', price: 29.99 },
    // Add more product data as needed
];

// Sample shopping cart (you would typically store this in the backend or in a user's session)
let shoppingCart = [];

// Function to display products on the page
function displayProducts() {
    const productsContainer = document.getElementById('product-list');

    productsContainer.innerHTML = ''; // Clear previous content

    products.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Function to add a product to the shopping cart
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
        shoppingCart.push(product);
        updateCart();
    }
}

// Function to update the shopping cart displayed on the page
function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = ''; // Clear previous content

    const cartTable = document.createElement('table');
    cartTable.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
    `;

    shoppingCart.forEach((product) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>$${product.price}</td>
        `;
        cartTable.appendChild(row);
    });

    cartContainer.appendChild(cartTable);
}

// Call the displayProducts function to initially display products
displayProducts();
