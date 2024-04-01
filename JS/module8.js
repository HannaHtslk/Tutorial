/*
 * Створи картки з товарами на основі масиву products
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт.
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)
 */

//* Product card template
/*
<li class="product-card">
  <img src="" alt="" class="product-card-img" />
  <div class="product-card-text-content">
    <h2 class="product-card-title"></h2>
    <p class="product-card-price">Price: uah.</p>
  </div>
</li>
*/

//* Modal card template
/*
<img class="product-modal-img" src="" alt="" />
<div class="product-modal-text-content">
  <h2 class="product-modal-title"></h2>
  <p class="product-modal-price">Price: uah.</p>
  <p class="product-modal-desc"></p>
</div>
*/


const products = [
  {
    id: 1,
    img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    name: 'Monitor',
    price: 3000,
    description: '23-inch monitor with Full HD resolution.',
  },
  {
    id: 2,
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX',
    name: 'Laptop',
    price: 20000,
    description:
      'Lightweight and powerful laptop with a 15-inch display and SSD.',
  },
  {
    id: 3,
    img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
    name: 'Smartphone',
    price: 8000,
    description: 'Equipped with a triple camera and a multi-core processor.',
  },
  {
    id: 4,
    img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
    name: 'Tablet',
    price: 12000,
    description: '10-inch tablet with high performance and a Retina display.',
  },
];

const createCardTemplate = ({img, name, price, id}) => {
    return `
<li class="product-card js-product-card" data-id="${id}">
  <img src="${img}" alt="${name}" class="product-card-img" />
    <div class="product-card-text-content">
    <h2 class="product-card-title"></h2>
    <p class="product-card-price">Price: ${price} uah.</p>
  </div>
</li>
`
}

const cardsArray = products.map((product) => {
    return createCardTemplate(product);
}).join('');

const productCards = document.querySelector('.js-products');
productCards.innerHTML = cardsArray;



productCards.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target === event.currentTarget) {
        return;
    }

    const clickedCard = event.target.closest('li'); // clickedCard це наша карточка по якій клікнув користувач
    const uniqueId = Number(clickedCard.dataset.id); // знайшли унікальний атрибут та його значення
    const cardToShow = products.find((product) => uniqueId === product.id) // перевіряємо на співпадіння клікну картку та картку з масиву(бази)

    const modalProduct = basicLightbox.create(
        `
    <img class="product-modal-img" src="${cardToShow.img}" alt="${cardToShow.name}" />
         <div class="product-modal-text-content">
                <h2 class="product-modal-title">${cardToShow.name}</h2>
                    <p class="product-modal-price">Price: ${cardToShow.price} uah.</p>
                    <p class="product-modal-desc">${cardToShow.description}</p>
        </div>  
        `
    )

    modalProduct.show();
})