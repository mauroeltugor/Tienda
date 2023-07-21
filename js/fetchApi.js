const api = "https://fakestoreapi.com/products";
const cardSection = document.getElementById("card");
const template = document.getElementById("template");
const quantityElement = document.getElementById("quantity");
const totalElement = document.getElementById("total");

const cart = [];

const getData = async (url) => {
    const info = await fetch(url);
    const data = await info.json();
    const finalData = data.map((product) => ({
        image: product.image,
        name: product.title,
        price: product.price,
        category: product.category,
    }));
    return finalData;
};

const fullCard = async (newUrl) => {
    const allProducts = await getData(newUrl);
    const fragment = document.createDocumentFragment();
    allProducts.forEach((product) => {
        const card = template.content.cloneNode(true);
        const image = card.getElementById("productImage");
        const name = card.getElementById("productName");
        const price = card.getElementById("productPrice");
        const category = card.getElementById("productCategory");
        const button = card.querySelector(".button");

        image.src = product.image;
        name.textContent = product.name;
        price.textContent = product.price;
        category.textContent = product.category;

        button.addEventListener("click", () => addToCart(product.name, product.price));

        fragment.appendChild(card);
    });
    cardSection.appendChild(fragment);
};

const addToCart = (name, price) => {
    let product = {
        name: name,
        price: price,
    };

    cart.push(product);
    updateCart();
};

const updateCart = () => {
    let total = 0;
    let quantity = cart.length;
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price;
    }

    quantityElement.innerText = "Quantity of products: " + quantity;
    totalElement.innerText = "Total to pay: " + total.toFixed(2);
};

fullCard(api);
