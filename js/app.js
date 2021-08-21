function updateProduct(product, price) {
  const productInput = document.getElementById(product + "-price");
  const productNumber = productInput.innerText;

  productInput.innerText = parseFloat(productNumber);
  //update total
  const productTotal = document.getElementById(product + "-price");
  productTotal.innerText = price;
  // calculate total
  calculateTotal();
}

function calculateTotal() {
  const bestPrice = document.getElementById("best-price").innerText;
  newBestPrice = parseFloat(bestPrice);
  const memoryPrice = document.getElementById("memory-price").innerText;
  newMemoryPrice = parseFloat(memoryPrice);
  const storagePrice = document.getElementById("storage-price").innerText;
  newStoragePrice = parseFloat(storagePrice);
  const deliveryPrice = document.getElementById("delivery-price").innerText;
  newDeliveryPrice = parseFloat(deliveryPrice);

  // update on the total Price
  let totalPrice = (document.getElementById("total-price").innerText =
    newBestPrice + newMemoryPrice + newStoragePrice + newDeliveryPrice);
  //update on grand total Price
  let grandTotal = (document.getElementById("grand-total").innerText =
    totalPrice);
  // get promo code
  const userInput = document.getElementById("promo-input");
  const userCode = userInput.value;
  // check for name validation stevekaku lower case
  if (userCode == "stevekaku") {
    newGrandTotal = (totalPrice * 20) / 100;
    grandTotal = totalPrice - newGrandTotal;
    document.getElementById("grand-total").innerText = grandTotal;
    userInput.value = "";
    // console.log(grandTotal);
  } else {
  }
}
//handle memory events
document.getElementById("memory-8gb").addEventListener("click", function () {
  updateProduct("memory", 0);
});
document.getElementById("memory-16gb").addEventListener("click", function () {
  updateProduct("memory", 180);
});

//handle storage events
document.getElementById("storage-256gb").addEventListener("click", function () {
  updateProduct("storage", 0);
});
document.getElementById("storage-512gb").addEventListener("click", function () {
  updateProduct("storage", 100);
});
document.getElementById("storage-1tb").addEventListener("click", function () {
  updateProduct("storage", 180);
});

//handle Delivery events
document.getElementById("delivery-free").addEventListener("click", function () {
  updateProduct("delivery", 0);
});
document.getElementById("delivery-fast").addEventListener("click", function () {
  updateProduct("delivery", 20);
});

document.getElementById("apply-btn").addEventListener("click", function () {
  calculateTotal();
});
