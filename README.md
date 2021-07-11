# LinkedlistJs
Linked list data structure using functional javascript.


## About
Implement a singly linked list with ease in functional JS.


## Installation
```js
npm i @josharsh/linkedlistjs
```

## How to Use
```js

var harshlist =require("LinkedList")
harshlist.append(10);
harshlist.append(20);
harshlist.append(30);
harshlist.append(40);
harshlist.append(50);
harshlist.append(60);

// Log the length of Linked List
console.log(harshlist.len());

//Map each values in the linked list
harshlist.map((dataItem)=>{
    console.log(dataItem);
})

// Convert to an Array
console.log(harshlist.toArray());
```

## Methods:
* .append(): Adds a new item to list
* .len(): Gets the size of the list
* .map(): maps through each item in list
* .exists(): checks if an item exists
* .toArray(): converts list to an Array.