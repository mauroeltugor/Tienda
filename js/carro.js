let cartItems = [];


let cards = document.querySelectorAll('.card');

cards.forEach(function (card) {
    card.addEventListener('click', function () {

        const title = card.querySelector('.card-titulo').textContent;

        cartItems.push(title);

        updateCartCounter();

        alert('Producto agregado al carrito: ' + title);
    });
});

function updateCartCounter() {
    const cartCounter = document.getElementById('cart-counter');
    cartCounter.textContent = ` Productos en el carrito ${cartItems.length}` ;
}
