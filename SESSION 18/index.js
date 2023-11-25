// alert('Hello world');

function fetchData(callback){
    setTimeout(()=>{
        const products=[

            {id:1,name:'Hasan Raza',age:21},
            {id:2,name:'Ali Raza',age:21},
            {id:3,name:'Zain Raza',age:21},
            {id:4,name:'Abdul Karim',age:17},
            {id:5,name:'Abdul Karim',age:17},
        ];
        callback(products);

    },1000);     
}
function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    console.log(products); 
    products.forEach(product => {
     const productElement = document.createElement('div');
      productElement.innerHTML = `<h3>${product.name}</h3><p>Age: ${product.age}</p>`;
      productsContainer.appendChild(productElement);
    });
}
fetchData(displayProducts);   