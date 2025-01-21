let container = document.createElement('div');
container.setAttribute('class', 'card-wrapper__container');

let cardList = document.createElement('ul');
cardList.setAttribute('class', 'card-wrapper__list');
container.appendChild(cardList);

document.body.appendChild(container);
function getCards(url) {
    fetch(url)
    .then(res => res.json())
    .then((fetchData) => { 
        card = fetchData; 
        
        card.forEach((item) => {
            let cardItem = document.createElement('li');
            cardItem.setAttribute('class', 'card-wrapper__item');
            cardList.appendChild(cardItem);

            let imgProduct = document.createElement('img');
            imgProduct.setAttribute('class', 'card-wrapper__img-product');
            imgProduct.setAttribute('alt', item.productName);
            imgProduct.setAttribute('src', item.img);
            imgProduct.setAttribute('width', item.width);
            imgProduct.setAttribute('height', item.height);
            cardItem.appendChild(imgProduct);

            let productTextWrapper = document.createElement('div');
            productTextWrapper.setAttribute('class', 'card-wrapper__product-text-wrapper');
            cardItem.appendChild(productTextWrapper);

            let cardTitle = document.createElement('h2');
            cardTitle.setAttribute('class', 'card-wrapper__title-product');
            cardTitle.textContent = item.productName; 
            productTextWrapper.appendChild(cardTitle);

            let cardPriceProduct = document.createElement('p');
            cardPriceProduct.textContent = item.price + ' ₽';
            cardPriceProduct.setAttribute('class', 'card-wrapper__text-price');
            productTextWrapper.appendChild(cardPriceProduct);

            let addButton = document.createElement('button');
            addButton.setAttribute('class', 'card-wrappe__add-button');
            productTextWrapper.appendChild(addButton);

            addButton.addEventListener('click', function(){
                let addToCart = document.querySelector('.cart__wrapper-for-add-products');

                let cartProduct = document.createElement('div');
                cartProduct.setAttribute('class', 'cart__product');
        
                let productImg = document.createElement('img');
                productImg.setAttribute('class', 'cart-product__img');
                productImg.setAttribute('alt', item.productName);
                productImg.setAttribute('src', item.img);
                productImg.setAttribute('width', item.width);
                productImg.setAttribute('height', item.height);
                cartProduct.appendChild(productImg);

                let productWrapperText = document.createElement('div');
                productWrapperText.setAttribute('class', 'card-wrapper__product-text-wrapper');
                cartProduct.appendChild(productWrapperText)
        
                let productName = document.createElement('h3');
                productName.setAttribute('class', 'card-wrapper__title-product');
                productName.textContent = item.productName;
                productWrapperText.appendChild(productName);
        
                let productPrice = document.createElement('p');
                productPrice.setAttribute('class', 'card-wrapper__text-price');
                productPrice.textContent = item.price + ' ₽';
                productWrapperText.appendChild(productPrice);
        
                addToCart.appendChild(cartProduct);
            });

            let imgPlus = document.createElement('img');
            imgPlus.setAttribute('src', './img/plus.svg');
            imgPlus.setAttribute('width', '35');
            imgPlus.setAttribute('height', '35');
            addButton.appendChild(imgPlus);
        });
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
}      

getCards('http://localhost:3001/card');

let menu = document.createElement('div');
menu.setAttribute('class', 'card-wrappe__menu');
container.appendChild(menu);

let menuTitle = document.createElement('h3');
menuTitle.setAttribute('class', 'card-wrappe__menu-title');
menuTitle.textContent = 'Меню бургеров';
menu.appendChild(menuTitle);

document.body.appendChild(menu);

getCards('http://localhost:3001/burgerCard');

// Корзина
let cartSection = document.createElement('section');
cartSection.setAttribute('class', 'cart');
document.body.appendChild(cartSection);

let cartContainer = document.createElement('div');
cartContainer.setAttribute('class', 'cart__container');
cartSection.appendChild(cartContainer);

let cartTitle = document.createElement('h2');
cartTitle.textContent = 'Корзина';
cartTitle.setAttribute('class', 'cart__title');
cartContainer.appendChild(cartTitle);

let wrapperForProduct = document.createElement('div');
wrapperForProduct.setAttribute('class', 'cart__wrapper-for-add-products');
cartContainer.appendChild(wrapperForProduct);

// function createCart(showText) {
//     let addBtn = document.createElement('button');
//     addBtn.textContent = 'Добавить';
//     cartContainer.appendChild(addBtn);

//     addBtn.addEventListener('click', function() {
//         createCard(cartContainer); 
//     });

//     if (showText) {
//         let text = document.createElement('p');
//         text.textContent = 'Добавленный товар';
//         cartContainer.appendChild(text);
//     }
// }

// let createCard = (cartContainer) => { 
//     let containerCard = document.createElement('div');
//     containerCard.setAttribute('class', 'card');
//     containerCard.textContent = 'Добавлен';
//     cartContainer.appendChild(containerCard); 

//     let btnRemove = document.createElement('button');
//     btnRemove.textContent = 'Удалить';
//     containerCard.appendChild(btnRemove);

//     btnRemove.addEventListener('click', function() {
//         containerCard.remove(); 
//     });
// };

// createCart(true);

// let wrapperCard = document.createElement('div');
// wrapperCard.setAttribute('class', 'wrapper');
// cartContainer.appendChild(wrapperCard);
