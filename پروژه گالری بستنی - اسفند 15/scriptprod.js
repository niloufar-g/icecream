const main = document.getElementById('root');

function renderProducts(products) {
  main.innerHTML = products
    .map(
      product => `<div class="product" data-product-id="${product.id}">
                    <h1>${product.title}</h1>
                    <p class="price">${product.price} تومان</p>
                    <p class="date">${product.date}</p>
                  </div>`
    )
    .join('');
}

const products = [
  {
    id: 1,
    title:'بستنی قیفی',
    price: '15000',
    date: new Date().toLocaleDateString('fa-IR'),
  },
  {
    id: 2,
    title:'بستنی توت فرنگی',
    price:'8000',
    date: new Date().toLocaleDateString('fa-IR'),
  },
  {
    id: 3,
    title:'بستنی لیوانی',
    price: '25000',
    date: new Date().toLocaleDateString('fa-IR'),
  }
];

renderProducts(products);


  
 let expectedProducts = products.map(product => ({
    ...product,
    price: product.price * 0.9
  }));

document.getElementById("changeProducts").addEventListener("click", function(){
renderProducts(expectedProducts)});


  
 
  
 
