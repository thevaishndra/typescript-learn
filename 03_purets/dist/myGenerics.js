"use strict";
//generic
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(3)//the type we are returning that will get locked here also
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({})//if we are trying to create our own datatype
function getSearchProducts(products) {
    //do some db operations
    const myIndex = 3;
    return products[3];
}
//instead of T we can pass number string boolean anything and in return we have to give the same
const getMoreSearchProducts = (products) => {
    //db op
    const myIndex = 4;
    return products[myIndex];
}; //basic definition of generics in arrow function - the comma here is just to tell it's generic by looking
//instead of number we can now write database
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(3, 4); //now, we cannot pass string in place U val
class Syllable {
    constructor() {
        this.cart = [];
    }
    addToCart(Products) {
        this.cart.push(Products);
    }
}
