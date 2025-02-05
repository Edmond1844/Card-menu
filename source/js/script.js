let cartArray = [];

let container = document.createElement('div');
container.setAttribute('class', 'card-wrapper__container');

let cardList = document.createElement('ul');
cardList.setAttribute('class', 'card-wrapper__list');
container.appendChild(cardList);

document.body.appendChild(container);

if(!localStorage.getItem('addedProduct')) {
    console.log('Пусто')
} else {
    cartArray = JSON.parse(localStorage.getItem('addedProduct'));
}
function getCards(url) {
    fetch(url)
    .then(res => res.json())
    .then((fetchData) => { 
        products = fetchData; 
        
        products.forEach((productItem) => {
            let cardItem = document.createElement('li'); 
            cardItem.setAttribute('class', 'card-wrapper__item');
            cardList.appendChild(cardItem);

            let imgProduct = document.createElement('img');
            imgProduct.setAttribute('class', 'card-wrapper__img-product');
            imgProduct.setAttribute('alt', productItem.productName);
            imgProduct.setAttribute('src', productItem.img);
            imgProduct.setAttribute('width', productItem.width);
            imgProduct.setAttribute('height', productItem.height);
            cardItem.appendChild(imgProduct);

            let productTextWrapper = document.createElement('div');
            productTextWrapper.setAttribute('class', 'card-wrapper__product-text-wrapper');
            cardItem.appendChild(productTextWrapper);

            let cardTitle = document.createElement('h2');
            cardTitle.setAttribute('class', 'card-wrapper__title-product');
            cardTitle.textContent = productItem.productName; 
            productTextWrapper.appendChild(cardTitle);

            let cardPriceProduct = document.createElement('p');
            cardPriceProduct.textContent = productItem.price + ' ₽';
            cardPriceProduct.setAttribute('class', 'card-wrapper__text-price');
            productTextWrapper.appendChild(cardPriceProduct);

            let addProduct = document.createElement('button');
            addProduct.setAttribute('class', 'card-wrappe__add-button');
            addProduct.setAttribute('type', 'button');
            productTextWrapper.appendChild(addProduct);

            let imgPlus = document.createElement('img');
            imgPlus.setAttribute('src', './img/plus.svg');
            imgPlus.setAttribute('width', '35');
            imgPlus.setAttribute('height', '35');
            addProduct.appendChild(imgPlus);

            addProduct.addEventListener('click', function(){
                cartArray.push(productItem);
                localStorage.setItem('addedProduct', JSON.stringify(cartArray));
        
                getCart();
            });
        });
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
}  

let hr = document.createElement('hr');
hr.setAttribute('style', 'margin-top: 100px');
container.appendChild(hr);

let cart = document.createElement('div');
cart.setAttribute('class', 'cart');
container.appendChild(cart);

let catrTitle = document.createElement('h2');
catrTitle.textContent = 'Корзина';
catrTitle.setAttribute('class','cart__title');
cart.appendChild(catrTitle);

let productListCart = document.createElement('ul');
productListCart.setAttribute('class', 'cart__product-list');
cart.appendChild(productListCart);


function getCart() {
    productListCart.innerHTML = '';

    cartArray.forEach(cartItem => {

        let productCartItem = document.createElement('li');
        productCartItem.setAttribute('class', 'cart__product-item');
        productListCart.appendChild(productCartItem);

        let productCartImg = document.createElement('img');
        productCartImg.setAttribute('class', 'cart__product-img');
        productCartImg.setAttribute('src', cartItem.img);
        productCartItem.appendChild(productCartImg);

        let productCartWrapper = document.createElement('div');
        productCartWrapper.setAttribute('class', 'cart__product-wrapper');
        productCartItem.appendChild(productCartWrapper);

        let productCartName = document.createElement('h2');
        productCartName.textContent = cartItem.productName;
        productCartName.setAttribute('class', 'cart__product-name');
        productCartWrapper.appendChild(productCartName);

        let productCartPrice = document.createElement('span');
        productCartPrice.setAttribute('class', 'cart__product-price');
        productCartPrice.textContent = cartItem.price + ' ₽';
        productCartWrapper.appendChild(productCartPrice);

        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Удалть из корзины';
        removeBtn.setAttribute('type', 'button');
        removeBtn.setAttribute('class', 'cart__button-remove');
        productCartItem.appendChild(removeBtn);
    });
}



getCards('http://localhost:3001/card');
getCart();
// getCards('http://localhost:3001/burgerCard');

