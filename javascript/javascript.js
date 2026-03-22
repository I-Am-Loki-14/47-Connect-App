const menubar = document.getElementById('menu-bar');
const linkContainer = document.querySelector('.link_container');

    menubar.onclick = function (){
        linkContainer.classList.toggle('show');
        console.log("Menu Clicked!");
        alert("Js connect");
    }
