let cart=[]
function addtocart(){
    cart.push({


        name:"Product 1",
        price:10.00
    })

// console.log(cart);


    a=document.getElementById('cartcount').textContent=cart.length;

    const      total=cart.reduce((acc,item)=>acc+item.price,0);
    document.getElementById('cartTotal').textContent=total.toFixed(2)
}
function checkout(){
    if(cart.length>0){
        alert("Checkout Successfully");
        cart=[];

        document.getElementById('cartcount').textContent='ha bhaie buhat kjredari hogaie ';
        document.getElementById('cartTotal').textContent='nikalo';
    }
    else{
        document.getElementById('addtoCartButton').addEventListener('click',addtocart);
        document.getElementById('checkoutButton').addEventListener('click',checkout);
    }

}
