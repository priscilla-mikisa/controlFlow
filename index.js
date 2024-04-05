//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values

function items(arr){
    let newArr = [];
    let arr1 = arr.slice(0,4);
    let arr2 = arr.slice(-2);
    arr1.forEach(num => {
        let z =num*num;
        console.log(z)
        newArr.push(z);
    })
    arr2.forEach(num => {
        let m =num+10;
        console.log(m);
        newArr.push(m);
    })
    console.log(newArr);

return newArr;
}
items([1,2,3,4,5,6,7,8,9,10,11,12,13]);

//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
 function firstFour(){
    let arrNum = [1,2,3,4,5,6,7,8,9];
    const m =  arrNum.slice(0,5)
           while(m){
            console.log(m);
            break;
           }

 }
 firstFour()

 //Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
 function copy(){
    let fruits= ['apple','plum','banana','strawberries','kiwi'];
    let i = -1;
    while(i < 4){
        i++;
        if(i /2 === 1 ) continue;
        console.log(fruits[i])
    }
 }
 copy()
 //Write a function that accepts an array of strings and console.logs each element using a for loop.
function anything(arr){
    for(let character = 0; character < arr.length; character++){
        console.log(arr[character]);
    }
}
anything(["dog",'cow',"Happy","good"]);
//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.
function reversedString(str){
    let x = str.split("").reverse().join("");
     while(x){
        console.log(x);
        break;
     }
   }
reversedString("Happy Cows")