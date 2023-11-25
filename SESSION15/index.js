const new_set=new Set([1,2,4,5,'burhan','khizar','jamila',{
    name:'jamila',
    email:'jamila@gmail.com'
}]);
// new_set.add('hasan');
// new_set.add('21');
// new_set.add('5');
// new_set.delete('burhan');
// console.log(new_set.has('hasan'));
// console.log(new_set.has('burhan'));
// console.log(new_set.size); 

// console.log(new_set); 
// new_set.forEach((value)=>{
//     console.log(value);  
     
// });

// for(jamila of new_set){
//     console.log(jamila );
// }

const setA=new Set([1,2,3,4,5 ,7,8]);
const setB=new Set([6,7,8,9,10]);
// const UnionSet=new Set([...setA,...setB]); 
// console.log(setA);
// console.log(setB);
// console.log(UnionSet); 

const IntersectionSet=new Set([...setA].filter((value)=>setB.has(value)));
console.log(IntersectionSet)
















