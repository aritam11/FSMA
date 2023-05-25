function calculatePrice() {
    var product_price_inr = parseFloat(document.getElementById("product_price_inr").value);
    var usd_to_inr_rate = parseFloat(document.getElementById("usd_to_inr_rate").value);
    var current_usd_to_inr_rate = parseFloat(document.getElementById("current_usd_to_inr_rate").value);

    var adjusted_price_inr = product_price_inr * (Math.round(current_usd_to_inr_rate) / usd_to_inr_rate);

    document.getElementById("adjusted_price_inr").textContent = "₹" + adjusted_price_inr.toFixed(2);
}
