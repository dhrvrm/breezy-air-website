document.querySelector(".menu_btn").addEventListener("click",toggle);
menu = document.querySelector("#menu");

function toggle(){
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }
    else{
        menu.classList.add('active');
    }
}