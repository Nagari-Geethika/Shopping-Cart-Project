const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
	{ id: 5, name: 'Product 5', price: 700 }
];

const cart = [];

function renderProducts() {
    const productsElement = document.getElementById('products');
    productsElement.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsElement.appendChild(productElement);
    });
}

function renderCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.textContent = `${item.name} - $${item.price}`;
        cartElement.appendChild(cartItemElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push({ ...product });
        renderCart();
    }
}

window.addEventListener('load', () => {
    renderProducts();
});
