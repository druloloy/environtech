var currentPrice = 0;
var currentQuan = 0;
var name = "";
var checkout = {};

    var modal = $('.showProduct');
    $('.productBox').click(function(){
        window.image = $('.image-holder img', this).attr('src');
        name = $(".content .description-holder h1", this).text();
        window.description = $(".content .description-holder #desc", this).text();
        window.creator = $(".content .creator-holder ", this).text();
        window.price = $(this).data("price");
        window.quantity = $(this).data("quantity");
        window.sfee = $(this).data("shipping-fee");

        currentQuan = window.quantity;
        currentPrice = window.price;
        checkout = {
            prodName : name,
            prodQuantity : currentQuan,
            prodPrice : currentPrice
        };


        modal.css("visibility", "visible"); 
        $('.showProduct .product .imageContainer #currentImage ').attr('src', window.image);
        $('.showProduct .product .description #name').text(name);
        $('.showProduct .product .description #description').text(window.description);
        $('.showProduct .product .description #creator').text(window.creator);
        $('.showProduct .product .buttons .buy p').html("&#8369;"+window.price);
        $('.showProduct .buttons .quantity #quan').text(window.quantity);

            $('#minus').click(function(){
                if(currentQuan > 0){
                    $(this).css("cursor", "pointer");
                    currentQuan -= window.quantity;
                    currentPrice -= window.price;
                }
                else{
                    currentQuan = currentQuan;
                    currentPrice = currentPrice;
                }
                
                $('.showProduct .product .buttons .buy p').html("&#8369;"+window.currentPrice);
                $('.showProduct .buttons .quantity #quan').text(window.currentQuan);
            });
            $('#add').click(function(){
                if(100 > window.currentQuan)
                {
                    $(this).css("cursor", "pointer");
                    currentQuan += window.quantity;
                    currentPrice += window.price;
                }
                else{
                    currentQuan = window.currentQuan;
                    currentPrice = window.currentPrice;
                }
                $('.showProduct .product .buttons .buy p').html("&#8369;"+window.currentPrice);
                $('.showProduct .buttons .quantity #quan').text(window.currentQuan);
            });


        window.available = $(this).data("availability");

        if(window.available == false){
            $('.showProduct .product .buttons .buy p').html("Unavailable");
            $('#add').off('click');
            $('#minus').off('click');
            $('.showProduct .product .buttons .buy').hover('false');
            
        }

        $('.showProduct .product .buttons .buy').mouseover(function(){
            if(window.available == false){
                $('.showProduct .product .buttons .buy',this).hover('false');
                $('p',this).text("Unavailable");
            }else{
                $('p',this).text("Click to Buy");
                $(this).css({
                    "background":"#200",
                    "color":"#fff"
                });
            }
        });
        $('.showProduct .product .buttons .buy').hover(function(){
            $('p', this).html("&#8369;"+ currentPrice);
            $(this).css({
                "background":"none",
                "color":"#000"
            });
        });
        
    $('.showProduct .product .buttons .buy').click(function(){
        if(window.available == true){
            window.location.href="./billing.html";
            var ordernumber = Math.floor(Math.random() * 999999999);
                checkout = {
                    prodName : name,
                    prodQuantity : currentQuan,
                    prodPrice : currentPrice,
                    prodShipping : sfee,
                    total : currentPrice,
                    orderNum : ordernumber
                };
                myCart = null;
                localStorage.setItem("cart", JSON.stringify(checkout));
                window.myCart = JSON.parse(localStorage.getItem("cart"));
                console.log(myCart);
        }
    });
});

    $('.close').click(function()    {
        modal.css("visibility", "hidden");
    });




