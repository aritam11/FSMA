function calculatePrice() {
    var product_price_inr = parseFloat(document.getElementById("product_price_inr").value.substring(1));
    var usd_to_inr_rate = parseFloat(document.getElementById("usd_to_inr_rate").value.substring(1));
    var current_usd_to_inr_rate = parseFloat(document.getElementById("current_usd_to_inr_rate").value.substring(1));

    var adjusted_price_inr = product_price_inr * (Math.round(current_usd_to_inr_rate) / usd_to_inr_rate);

    document.getElementById("adjusted_price_inr").textContent = "₹" + adjusted_price_inr.toFixed(2);
}

function handleChange1() {
    var myValue = document.getElementById("product_price_inr").value;
    console.log(myValue);
 
    if (myValue.indexOf("₹") != 0)
    {
       myValue = "₹" + myValue;
    }
 
    document.getElementById("product_price_inr").value = myValue;
 }

function handleChange2() {
    var myValue = document.getElementById("usd_to_inr_rate").value;
    console.log(myValue);
 
    if (myValue.indexOf("₹") != 0)
    {
       myValue = "₹" + myValue;
    }
 
    document.getElementById("usd_to_inr_rate").value = myValue;
 }


function handleChange3() {
    var myValue = document.getElementById("current_usd_to_inr_rate").value;
    console.log(myValue);
 
    if (myValue.indexOf("₹") != 0)
    {
       myValue = "₹" + myValue;
    }
 
    document.getElementById("current_usd_to_inr_rate").value = myValue;
 }




