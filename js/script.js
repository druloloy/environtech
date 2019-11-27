window.addEventListener('scroll', function(e) {
    const target = document.querySelectorAll('.scroll');

    var index = 0, length = target.length;
    for (index; index < length; index++)
    {
        var pos = window.pageYOffset * target[index].dataset.rate;
        target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
    }


});
function show()
{

    console.log("Show Menu!");
    document.querySelector('.showNav').style.width="40%";
    document.querySelector('#hideMenu').style.display = "block";
    document.querySelector('#showMenu').style.display = "none";
    document.querySelector('.menu').style.opacity = "1";
    document.querySelector('.showNav').style.borderRight = "2px solid #98ff98";
}

function hide()
{
    console.log("Close Menu!");
    document.querySelector('.showNav').style.width="0%";
    document.querySelector('#hideMenu').style.display = "none";
    document.querySelector('#showMenu').style.display = "block";
    document.querySelector('.menu').style.opacity = "0";
    document.querySelector('.showNav').style.borderRight = "none";
}
