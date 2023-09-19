document.addEventListener('DOMContentLoaded', function() {
    // Отримуємо посилання на елементи DOM
    const categoriesList = document.querySelector('.categories ul');
    const productList = document.getElementById('product-list');
    const productDescription = document.getElementById('product-description');
    const buyButton = document.getElementById('buy-button');

    // Список товарів за категорією
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

    // Функція для відображення списку товарів за обраною категорією
    function showProducts(category) {
        productList.innerHTML = ''; // Очищаємо список товарів

        if (productsByCategory[category]) {
            productsByCategory[category].forEach(product => {
                const listItem = document.createElement('li');
                listItem.textContent = product.name;

                // Додаємо обробник кліку для кожного товару
                listItem.addEventListener('click', () => {
                    productDescription.textContent = `Назва: ${product.name}, Ціна: $${product.price}`;
                    buyButton.style.display = 'block';
                });

                productList.appendChild(listItem);
            });
        }
    }

    // Обробник кліку на категорію
    categoriesList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const category = event.target.getAttribute('data-category');
            showProducts(category);
        }
    });

    // Обробник кліку на кнопку "Купити"
    buyButton.addEventListener('click', () => {
        alert('Товар куплений!');
        productDescription.textContent = 'Виберіть товар для перегляду інформації.';
        buyButton.style.display = 'none';
    });
});
