// function hello(){
//     console.log("hello settimeoutwala bhai");
// }
// function hello_one(){
//     console.log('hello_one ');
// }
// function hello_two(){
//     console.log('hello_two   ');
//     setTimeout(hello, 3000);
// }
// function hello_three(){
//     console.log('hello_three ');
// }


// hello_three();
// hello_two();
// hello_one();
// // hello();


function dosomethingAsync(callback){
    setTimeout(function() {
        console.log('helo');
        callback();
    }, 2000);
}


function nessw(){
    console.log('2');
}
dosomethingAsync(nessw);


// function callbackfunction(){
//     console.log('Callback Called');
// }

// dosomethingAsync(callbackfunction);
// callbackfunction();













