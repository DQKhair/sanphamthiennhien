var header=document.getElementById('header')
var mobileMenu=document.getElementById('mobile_menu_btn')
var headerHeight=header.clientHeight;
// mobile_menu_btn
//open/close mobile menu
mobileMenu.onclick=function(){
    var isClose=header.clientHeight === headerHeight;
    if(isClose){
        header.style.height='auto';
    }else{
        header.style.height='50px';
    }
}