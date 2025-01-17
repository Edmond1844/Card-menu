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
            imgProduct.setAttribute('width', item.height);
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
getCards('http://localhost:3001/burgerCard');




