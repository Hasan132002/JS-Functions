function fetchProducts(callback){
    setTimeout(()=>{
        const products=[
 
            {id:1,name:'Hasan Raza',age:21},
            {id:2,name:'Ali Raza',age:21},
            {id:3,name:'Zain Raza',age:21},
            {id:4,name:'Abdul Karim',age:17},
            {id:5,name:'Abdul Karim',age:17},
        ];
        // console.log('dd');
        callback(products);
 
    },1000);     
}
async function fecthdata(){ 
    try{ 

const products = await new Promise(resolvesss=>fetchProducts(resolvesss )); 
        // const products = await fetchProducts();
        console.log(products);
        const productsContainer=document.getElementById('product');
        products.forEach(product => {
            const productElement=document.createElement('div');
            productElement.innerHTML=`<h3>${product.name}</h3>`;
            productsContainer.appendChild(productElement);
            
        });
    }
    catch(error){
        console.error('Error in Fetching the product',error);
    }
}
fecthdata(); 