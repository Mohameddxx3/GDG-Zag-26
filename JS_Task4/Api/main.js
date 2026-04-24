fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {
    let products = data.products;

console.log(products)

    products.forEach(product => {
        document.body.innerHTML += `
            <div class="card">
                <img src="${product.thumbnail}" width="150">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
                <button>Add to Cart</button>
            </div>
        `;
    });

})
.catch(err => console.log(err));