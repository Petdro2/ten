import products from './products.js';
import { renderProductCards } from "./modules/productCards.js";
// import { paginate } from './modules/pagination.js';




window.addEventListener('DOMContentLoaded', () =>{
    const productContainer = document.querySelector('.beer-cards-js');

    renderProductCards(products, productContainer);
    paginate(products);
});

                        