const restaurantId = localStorage.getItem("selectedRestaurant");

const restaurantNames = {
    "1": "McDonald's",
    "2": "Pizza Hut",
    "3": "Taco Bell",
    "4": "Burger King",
    "5": "Subway",
    "6": "Quiznos"
};

const menus = {
    "1": [
        { name: "Big Mac", price: 5, image: "images/foods/comida1a.jpg" },
        { name: "McPollo", price: 6, image: "images/foods/comida1b.jpg" }
    ],
    "2": [
        { name: "Pepperoni Pizza", price: 12, image: "images/foods/comida2a.jpg" },
        { name: "Meat lovers", price: 10, image: "images/foods/comida2b.jpg" }
    ],
    "3": [
        { name: "CrunchyWrap Supreme", price: 8, image: "images/foods/comida3a.jpg" },
        { name: "Crispy chicken burrito", price: 9, image: "images/foods/comida3b.jpg" }
    ],
    "4": [
        { name: "Whopper", price: 7, image: "images/foods/comida4a.jpg" },
        { name: "Cheeseburger", price: 5, image: "images/foods/comida4b.jpg" }
    ],
    "5": [
        { name: "Teriyaki chicken", price: 9, image: "images/foods/comida5a.jpg" },
        { name: "Italiano B.M.T", price: 8, image: "images/foods/comida5b.jpg" }
    ],
    "6": [
        { name: "Lobster", price: 10, image: "images/foods/comida6a.jpg" },
        { name: "Prime rib", price: 11, image: "images/foods/comida6b.jpg" }
    ]
};

document.getElementById("restaurantName").textContent = restaurantNames[restaurantId] || "Restaurante Desconocido";
const foodItems = document.getElementById("foodItems");
let cartCount = 0;

menus[restaurantId].forEach(food => {
    const div = document.createElement("div");
    div.className = "food";
    div.innerHTML = `
        <img src="${food.image}" alt="${food.name}">
        <p>${food.name} - $${food.price}</p>
        <button class="addToCart" data-name="${food.name}" data-price="${food.price}">Añadir al carrito</button>
    `;
    foodItems.appendChild(div);
});

document.querySelectorAll(".addToCart").forEach(button => {
    button.addEventListener("click", function() {
        const name = this.getAttribute("data-name");
        const price = parseFloat(this.getAttribute("data-price"));
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        cart.push({ name, price });
        localStorage.setItem("cart", JSON.stringify(cart));
        cartCount++;
        document.getElementById("cartCount").textContent = cartCount;
    });
});

document.getElementById("viewCartButton").addEventListener("click", function() {
    window.location.href = "cart.html";
});




