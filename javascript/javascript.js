// const menubar = document.getElementById('menu-bar');
// const linkContainer = document.querySelector('.link_container');

// if (menubar) {
//     menubar.addEventListener('click', function() {
//         console.log("Menu bar clicked!"); // Console မှာ ပေါ်မပေါ် ကြည့်ပါ
//         linkContainer.classList.toggle('show');
//     });
// }

const menubar = document.getElementById('menu-bar');
const linkContainer = document.querySelector('.link_container');

if (menubar && linkContainer) {
    menubar.onclick = function() {
        linkContainer.classList.toggle('show');
        console.log("Menu toggled!"); 
    };
}

// const hideinfo = document.getElementById("hideinfo");
// const btn = document.getElementById("btn");
// const btns = document.querySelectorAll(".btn");
// console.log(btns);


// function seemore(btns) {
//     const target = btns.previousElementSibling.querySelector(".hideinfo")
//     if (hideinfo.classList.toggle("hideinfo")) {
//         btn.innerText = "See more"
//     } else {
//         btn.innerText = "See less"
        
//     }
// }