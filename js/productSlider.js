let image_slide = document.getElementsByClassName('image-holder');
let image_arr = ['a','b','c'];
let length = image_arr.length;
function next() {
    if(length<image_arr.length)
    {
        length++;
    }else   {
        length = 1;
    }
    image_slide.innerHTML = "<img src="+image_arr[length+1]+".jpg>";
}
function prev() {
    if(length<image_arr.length+1 && length>1)
    {
        length--;
    }else   {
        length = 1;
    }
    image_slide.innerHTML = "<img src="+image_arr[length-1]+".jpg>";
}