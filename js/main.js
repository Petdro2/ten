const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu-list');


menuBtn.addEventListener('click' , () =>{
  menu.classList.toggle('menu__list--active');
});

let quantity = 1;

document.getElementById('increase').addEventListener('click', function() {
    quantity++;
    document.getElementById('quantity-value').textContent = quantity;
});

document.getElementById('decrease').addEventListener('click', function() {
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity-value').textContent = quantity;
    }
});
