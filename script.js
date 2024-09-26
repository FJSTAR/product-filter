'use strict';

var categories = ['Men','Women','kids']
var products = [
    {
        name: 'T-Shirt',
        price: 150,
        category: 'Men',
        image: 'images/product1.jpg'
    },
    {
        name: 'Pants',
        price: 200,
        category: 'Men',
        image: 'images/product2.jpg'
    },
    {
        name: 'Shoes',
        price: 100,
        category: 'kids',
        image: 'images/product3.jpg'
    },
    {
        name: 'Saree',
        price: 300,
        category: 'Women',
        image: 'images/product4.jpg'
    },
    {
        name: 'Jeans',
        price: 250,
        category: 'kids',
        image: 'images/product5.jpg'
    },
    {
        name: 'Dress',
        price: 400,
        category: 'Women',
        image: 'images/product6.jpg'
    }
]

categories && categories.length > 0 && categories.forEach((value)=>{
    console.log(value);

    var productList = document.createElement('li');
    var productItem = document.createElement('a');
    productItem.innerText = value
    productItem.addEventListener('click', filter);
    productList.className = 'nav-item';
    productItem.className = 'nav-link';
    productList.append(productItem);
    document.querySelector('.categories').append(productList);
})

function getproducts(products) {
    debugger    
    products && products.length > 0 && products.forEach((value)=>{
        console.log(value);
        var {name, price, category, image} = value;
        var divtag = document.createElement('div');
        divtag.className = 'col-xl-3 text-center';
        divtag.dataset.name = name;
        divtag.dataset.price = price;
        divtag.dataset.category = category;
        divtag.dataset.image = image;
        var imgtag = document.createElement('img');
        var h2tag = document.createElement('h2');
        var ptag = document.createElement('p');
        var button = document.createElement('button');
        button.innerText = 'Show Product';
        button.addEventListener('click', showProduct);
        button.className = 'btn btn-primary';
        imgtag.src = image;
        imgtag.className = 'img-fluid';
        h2tag.innerText = price;
        ptag.innerText = name;
        divtag.append(imgtag, h2tag, ptag, button);
        document.querySelector('.products').append(divtag);
    
    })
}

getproducts(products);

function filter() {
    debugger
    console.log(this.innerText);
    var result = products.filter(value => value.category == this.innerText);
    console.log(result);
    document.querySelector('.products').innerText = '';
    getproducts(result);    
}
document.getElementById('range').onchange = function() {
    console.log(this);
    console.log(this.value);
    var result = products.filter(value => value.price > this.value)
    console.log(result);
    document.querySelector('.products').innerText = '';
    getproducts(result);
}

function showProduct() {
    document.querySelector('.modal-box').style.display = 'block';
    document.querySelector('.black-box').style.display = 'block';
    console.log(this);
    console.log(this.parentNode);
    console.log(this.parentNode.dataset);
    document.querySelector('.modal-box').innerHTML = `
    <img src="${this.parentNode.dataset.image}">
    <h2>${this.parentNode.dataset.price}</h2>
    <p>${this.parentNode.dataset.name}</p>
    <p>${this.parentNode.dataset.category}</p>
    <button onclick="closeModal()">Close</button>   
    `
}

document.querySelector('.black-box').onclick = function() {
    closeModal();
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

function closeModal() {
    document.querySelector('.modal-box').style.display = 'none';
    document.querySelector('.black-box').style.display = 'none';
}

