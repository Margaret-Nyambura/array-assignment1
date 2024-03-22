// Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let arr1 = [3,7,34,90,12];
console.log(arr1[arr1.length -1]);

let arr2 = [true, "green", "where",12,56];
console.log(arr2[arr2.length -1]);

// Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let words = ["Cow", "Bird", "Snake", "Dog"];
let words2 = words.toString();
console.log({words2});

 
// Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr3 =  [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr4 = arr3.sort();
console.log({arr4});

// Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
// let arr = ["boy", "man", "girl",            "school", "girl", "woman"];
let arr =  ["boy", "man", "girl", "school", "girl", "woman"];
function removeDuplicates(arr){;
    return{...new Set(arr)};
    console.log((arr));
}


// Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4];
let items = arr5.includes("food");
if(items==true){
console.log((true));
}
else{
    console.log("the search word was not found");
}
// Write a JS script to sort the following string:let word = "renniw"
let word = "renniw";
let newWord = word.split();
console.log(newWord);

let x = newWord.sort();
console.log(x);

let text = x.toString();
console.log(text);


