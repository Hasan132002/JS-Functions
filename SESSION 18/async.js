// Synchronous Fetching
function fetchProductsSynchronously() {
    const products = [
      { id: 1, name: 'Product 1', price: 20 },
      { id: 2, name: 'Product 2', price: 30 },
      { id: 3, name: 'Product 3', price: 25 },
    ];
    return products;
  }
  
   function fetchProductsAsync(callback) {
    setTimeout(() => {
      const products = [
        { id: 1, name: 'Product 1', price: 20 },
        { id: 2, name: 'Product 2', price: 30 },
        { id: 3, name: 'Product 3', price: 25 },
      ];
      callback(products);
    }, 1000);
  }
  
  // Display Products on the Webpage
  function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `<h3>${product.name}</h3><p>${product.price}$</p>`;
      productsContainer.appendChild(productElement);
    });
  }
  
  // Synchronous Usage
  const synchronousProducts = fetchProductsSynchronously();
  displayProducts(synchronousProducts);
  
  // Asynchronous Usage
  fetchProductsAsync(displayProducts);
  