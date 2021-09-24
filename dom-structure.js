// 1) Select each element in the DOM with "document.querySelector"
//      and "document.querySelectorAll", and then console log the element selection

// body
console.log(document.querySelectorAll("body"));

// h1
console.log(document.querySelector("h1"));

// p
console.log(document.querySelector("p"));

// div
console.log(document.querySelectorAll("div"));

// All of the "a" elements
console.log(document.querySelectorAll("a"));

// Just the YouTube "a" element (hint: use its ID)
console.log(document.querySelector("#youtube"));

// Just the Twitch "a" element (hint: use its ID)
console.log(document.querySelector("#twitch"));

// All of the elements with the class name "red"
console.log(document.querySelector(".red"));