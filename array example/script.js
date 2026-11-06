// joining and splitting array and strings

/*let ex = "my-ass-hurts"
ex = "hello--worse"
console.log(ex)

function camelise(str){

    // let arr = str.split("-");
    
    // for(let i = 0; i < arr.length; i++){
    //     if (i != 0){
    //         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    //     }
    // }

    // str = arr.join("");

    return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

console.log(camelise(ex)); */

// filtering array

/*let arr = [5, 3, 8, 1];

function filterRange(array, a, b){
    return array.filter((item) => ((item >= a) && (item <= b)))
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered );

console.log( arr );*/

// filtering array in place

/*let arr = [5, 3, 8, 1];

function filterRangeInPlace(array, a , b){
    for (let i = 0; i < arr.length; i++){
        if ((array[i] <= a) || (array[i] >= b))
            array.splice(i, 1);
        i--;
    }
}

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); */

// Sort in decreasing order

/*let arr = [5, 2, 1, -10, 8]; 

function compareNum (a,b){
    return b - a;
}

alert( arr.sort(compareNum) ); // 8, 5, 2, 1, -10 */

// copy and sort array

/*let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

function copySorted(a){
    let x = a.slice();
    return x.sort();
}

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes) */ //i = a.length - 1; i > 0; i--

// shuffle an array

/*let arr = [1,2,3];

function shuffle (a){
    for (let i = 0; i < a.length; i ++) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [a[i], a[j]] = [a[j], a[i]]; 
    } 
    return a; 
}

alert(shuffle(arr));
alert(shuffle(arr));
alert(shuffle(arr));*/

// return unique array

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// function unique(arr) {
//   return [...new Set(arr)];
// }

// alert( unique(strings) ); // Hare, Krishna, :-O

const sumAll = function(a,b) {
    let c = a;
    let total = 0;
    for(let i = a; i <= b; i++){
        total += c;
        c += 1;
    }
    return alert(total);
};

sumAll(1,4000);