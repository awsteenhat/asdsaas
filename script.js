var cart = [];
var totalPrice = 0;

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    totalPrice += price;
    updateOrderList();
}

function updateOrderList() {
    var orderList = document.getElementById("cartItems");
    orderList.innerHTML = '';
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var listItem = document.createElement("li");
        listItem.textContent = item.name + ' - ' + item.price + ' Pesos';
        orderList.appendChild(listItem);
    }
    document.getElementById("totalPrice").textContent = totalPrice;
}

function calculateChange() {
    // Get the total price and the amount paid
    var totalPrice = parseFloat(document.getElementById('totalPrice').innerText);
    var amountPaid = parseFloat(document.getElementById('paymentAmount').value);

    // Calculate the change
    var change = amountPaid - totalPrice;

    // Display the change
    var changeDisplay = document.getElementById('changeAmount');
    if (isNaN(change) || change < 0) {
        changeDisplay.innerText = "Insufficient amount paid.";
    } else {
        changeDisplay.innerText = "Change: " + change.toFixed(2) + " Pesos";
    }
}

function showOrderList() {
    var orderListDiv = document.getElementById("orderList");
    if (orderListDiv.style.display === "none") {
        orderListDiv.style.display = "block";
    } else {
        orderListDiv.style.display = "none";
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



