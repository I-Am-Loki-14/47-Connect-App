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