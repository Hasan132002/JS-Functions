const cartItems=[];
const checkoutItems=[];
const thankyouitem=[];

const cartlist=document.getElementById('cart-items')
const checkoutlist=document.getElementById('checkout-items')
const thankyoulist=document.getElementById('thank-you-items')
const checkoutbutton=document.getElementById('checkout-button')
const confirmbutton=document.getElementById('confirm-button')

function addtocart(item){
    cartItems.push(item);
    const li=document.createElement('li');
    li.textContent=item;
    cartlist.appendChild(li);

}
checkoutbutton.addEventListener('click',()=>{
    cart.style.display='none';
    checkout.style.display='block';
    checkoutItems.push(...cartItems);
    cartItems.length=0;
    cartlist.innerHTML=''
    checkoutItems.forEach(item=>{
        const li=document.createElement('li');
        li.textContent=item;
        checkoutlist.appendChild(li);
    });
});

confirmbutton.addEventListener('click',()=>{

checkout.style.display='none';
thankyou.style.display='block';
thankyouitem.push(...checkoutItems);
checkoutItems.length=0;
checkoutlist.innerHTML='';
thankyouitem.forEach(item=>{
    const li=document.createElement('li');
    li.textContent=item;
    thankyoulist.appendChild(li);
});
console.log("Order Confirmed",thankyouitem);
});



























































price=10;
price2=20;
price3=30
addtocart(`Item 1 and the price of that item is ${price}`);
addtocart(`Item 2 and the price of that item is ${price2} `);
addtocart(`Item 3 and the price of that item is ${price3} `);



