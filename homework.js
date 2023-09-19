document.addEventListener('DOMContentLoaded', function() {
    const categoriesList = document.querySelector('.categories ul');
    const productList = document.getElementById('product-list');
    const productDescription = document.getElementById('product-description');
    const buyButton = document.getElementById('buy-button');

    const productsByCategory = {
        electronics: [
            { name: 'Смартфон', price: 500 },
            { name: 'Ноутбук', price: 1000 },
        ],
        clothing: [
            { name: 'Футболка', price: 20 },
            { name: 'Джинси', price: 50 },
        ],
        books: [
            { name: 'Роман', price: 10 },
            { name: 'Детектив', price: 15 },
        ],
    };

    function showProducts(category) {
        productList.innerHTML = ''; 

        if (productsByCategory[category]) {
            productsByCategory[category].forEach(product => {
                const listItem = document.createElement('li');
                listItem.textContent = product.name;

                listItem.addEventListener('click', () => {
                    productDescription.textContent = `Назва: ${product.name}, Ціна: $${product.price}`;
                    buyButton.style.display = 'block';
                });

                productList.appendChild(listItem);
            });
        }
    }

    categoriesList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const category = event.target.getAttribute('data-category');
            showProducts(category);
        }
    });

    buyButton.addEventListener('click', () => {
        alert('Товар куплений!');
        productDescription.textContent = 'Виберіть товар для перегляду інформації.';
        buyButton.style.display = 'none';
    });
});
