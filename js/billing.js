$(document).ready(function(){
    myCart = JSON.parse(localStorage.getItem("cart"));
    console.log(myCart);


    var table_data = {
        product : $('#prodName'),
        quantity: $('#prodQuan'),
        price : $('#prodPrice'),
        sfee : $('#sfee'),
        total : $('#totalPrice')
    };
    table_data.product.text(myCart.prodName);
    table_data.quantity.text(myCart.prodQuantity);
    table_data.price.html("&#8369;"+myCart.prodPrice);
    table_data.sfee.html("&#8369;"+myCart.prodShipping);

    var total = parseInt(myCart.prodPrice, 10) + parseInt(myCart.prodShipping, 10);
    table_data.total.html("&#8369;"+total);
});