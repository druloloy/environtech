$(document).ready(function(){
    myCart = JSON.parse(localStorage.getItem("cart"));
    $('#order-id').html(myCart.orderNum);
    var total = parseInt(myCart.prodPrice, 10) + parseInt(myCart.prodShipping, 10);


    custInfo = JSON.parse(localStorage.getItem("customer"));
    var $mobileNumber = custInfo.custMobileNumber;
    var $email = custInfo.custEmail;
    var $message = "You're all set. Thank you for purchasing, we at ENVIRONTECH are hoping that you'll make a change for our environment.";
    var html = '<div style="background: #98ff98;padding: 20px;font-family: trebuchet ms, sans-serif;"><h1 style="font-family: trebuchet ms, sans-serif;color: #555;font-size:50px;">Thank You!<br></h1><p style="font-family: trebuchet ms, sans-serif;font-size:20px;">We at EnvironTech are extending our gratitude for your support on our advocacy. We are hoping that your purchase will help humanity in fight of our own poison. <br>We hope to see you again soon!<br><br></p></div>';
    var order = '<h2 style="font-size:30px;">Your Order</h2><br><p style="font-size:20px;">Product: '+myCart.prodName+'</p><br><p style="font-size:20px;">Quantity: '+myCart.prodQuantity+'</p><br><p style="font-size:20px;">Shipping: '+myCart.prodShipping+'</p><br><p style="font-size:20px;">Total Price: '+total+'</p>';
    
    Email.send({
        Host : "smtp.sendgrid.net",
        Username : "apikey",
        Password : "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",
        To : $email,
        From : "no-reply.merchant@environtech.com",
        Subject : 'ORDER #'+$('#order-id').html(),
        Body : html+order
    }).then(
      message => console.log(message)
    );


});