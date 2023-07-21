const api = 'https://fakestoreapi.com/products';
const cardSection = document.getElementById('card');
const template = document.getElementById('template');
const cantidad = document.getElementById('cantidad');
const total = document.getElementById('total');
const button = document.getElementById('boton');

const cart = [];

const getData = async (url) => {
    const info = await fetch(url);
    const data = await info.json();
    const finalData = data.map((product) => ({
        image: product.image,
        name: product.title,
        price: product.price,
        category: product.category
    }));
    return finalData;
}

// const addProduct = () => {
//     cart.push(1);
//     total.textContent = cart.length;
// }

// const ss = button.addEventListener('click', addProduct);

const fullCard = async (newUrl) => {
    const allProducts = await getData(newUrl);
    const fragment = document.createDocumentFragment();
    allProducts.forEach((product) => {
        const card = template.content.cloneNode(true);
        const image = card.getElementById('imagenProducto');
        const nombre = card.getElementById('nombreProducto');
        const precio = card.getElementById('precioProducto');
        const categoria = card.getElementById('categoriaProducto');
        image.src = product.image;
        nombre.textContent = product.name;
        precio.textContent = product.price;
        categoria.textContent = product.category;
        fragment.appendChild(card);
    });
    cardSection.appendChild(fragment);
}

fullCard(api);
