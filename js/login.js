
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    localStorage.removeItem("cart");
    window.location.href = "restaurants.html";
});
