const product = document.querySelectorAll('.product');
const cardsInBasket = document.querySelector('.cart__products');

const cartTitle = document.querySelector('.cart__title');


checkBasketTitle();
function checkBasketTitle() {
    if (cardsInBasket.innerText === '') {
        cartTitle.classList.add('cart__title-hide');
    } else {
        cartTitle.classList.remove('cart__title-hide');
    }
}
cardsInBasket.addEventListener('click', function removeElementFromBasket(event) {
    let click = event.target;
    if (click.className.includes('cart__product-remove')) {
        click.parentNode.remove();
        checkBasketTitle();
    }
})

product.forEach(element => {

    function createNewCard() {
        let cardProduct = document.createElement('div');
        cardProduct.className = 'cart__product';
        cardProduct.dataset.id = element.dataset.id;

        const img = document.createElement('img');
        img.className = 'cart__product-image';
        img.setAttribute('src', element.querySelector('.product__image').getAttribute('src'))

        const cardProductCount = document.createElement('div');
        cardProductCount.className = 'cart__product-count';
        cardProductCount.innerText = element.querySelector('.product__quantity-value').innerText;

        const removeCard = document.createElement('div');
        removeCard.className = 'cart__product-remove';
        removeCard.innerText = 'x';


        cardProduct.appendChild(img);
        cardProduct.appendChild(cardProductCount);
        cardProduct.appendChild(removeCard);
        document.querySelector('.cart__products').appendChild(cardProduct);

        checkBasketTitle();
    }

    element.addEventListener('click', function selectButtons(event) {
        let click = event.target;

        if (click.className.includes('product__quantity-control_dec')) {
            if (element.querySelector('.product__quantity-value').innerText <= 1) {
                return;
            }
            element.querySelector('.product__quantity-value').innerText--;
        }

        if (click.className.includes('product__quantity-control_inc')) {
            element.querySelector('.product__quantity-value').innerText++;
        }

        if (click.className.includes('product__add')) {

            let cardsProductArr = Array.from(document.querySelector('.cart__products').querySelectorAll('.cart__product'));
            let check = false;

            if (cardsProductArr.length != 0) {
                const productInCard = cardsProductArr.find(el => el.dataset.id === element.dataset.id);
                if (productInCard) {
                    productInCard.querySelector('.cart__product-count').innerText = Number(productInCard.querySelector('.cart__product-count').innerText) + Number(element.querySelector('.product__quantity-value').innerText);
                    check = true;
                }
                if (check == false) {
                    createNewCard();
                }
            }
            if (cardsProductArr.length === 0) {
                createNewCard();
                check = false;
            }
        }
    })
});