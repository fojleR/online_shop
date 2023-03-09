function Product(ProductDescription,ProductPrice,imagelink){ // creating object for product information
    this.ProductDescription = ProductDescription;
    this.ProductPrice = ProductPrice;
    this.imagelink = imagelink;
}

var productlist = []; // here i stored information of all the products


// here i created the products into the productlist
var product1 = new Product("Stripe Polo Shirt for Men-RA (C)", 500.00, "/images/product-1.jpeg");
var product2 = new Product("Stylish Half Sleeve T-shirt for Men  BH (A)", 750.00, "/images/product-2.jpeg");
var product3 = new Product("Colorful Polo Shirt for Men-US (M)", 550.00, "/images/product-3.jpeg");
var product4 = new Product("Colorful Polo Shirt for Men-US (K)", 575.00, "/images/product-4.jpeg");

// here i pushed the products into the productlist
productlist.push(product1);
productlist.push(product2);
productlist.push(product3);
productlist.push(product4);

for(var i = 0; i < 4; i++){
    var y = document.querySelectorAll(".product")[i].lastElementChild;
    y.innerText = i;
    var x = document.querySelectorAll(".product")[i].firstElementChild;
    var img = productlist[i].imagelink;
    x.src = img;
    x.nextElementSibling.innerText = productlist[i].ProductDescription;
    x.nextElementSibling.nextElementSibling.innerText = "Tk " + productlist[i].ProductPrice;
}



for(var i = 0; i < 4; i++){ // here i have identified the product that have been clicked
    document.querySelectorAll(".btn")[i].addEventListener("click",update);
}


var t_item = 0;  //total item thet has been selected
var t_price = 0; // total price for selected items


function update(ev){ //here i have updated the products
    var x = ev.target.parentElement;
    var ind =parseInt(x.lastElementChild.innerText);
    var table = document.getElementById("cartTable");
    var row_number = table.rows.length;
    var row =table.insertRow(row_number);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerText = productlist[ind].ProductDescription;
    cell2.innerText = productlist[ind].ProductPrice;
    t_item += 1;
    t_price += productlist[ind].ProductPrice;
    document.getElementById("tot_item").innerText = t_item;
    document.getElementById("tot_price").innerText = t_price;
    //console.log(productlist[ind].ProductDescription + " " + productlist[ind].ProductPrice);
}

// adding event litchener for Empty Cart button
document.getElementById("Empty Cart").addEventListener("click",delte);

// Deleting all the row of cart table
function delte(){
    var table = document.getElementById('cartTable');
    var rowCount = table.rows.length;
    for (var i = 1; i < rowCount; i++) {
        table.deleteRow(1);
    }
    t_item = 0;
    t_price = 0;
    document.getElementById("tot_item").innerText = t_item;
    document.getElementById("tot_price").innerText = t_price;
}