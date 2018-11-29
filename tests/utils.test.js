const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const expect = chai.expect;
const assert = chai.assert;

// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
it("should say hello", function() {
  const hello = utils.sayHello();
  expect(hello).to.be.a("string");
  expect(hello).to.equal("Hello");
  expect(hello).with.lengthOf(5);
});

it("should return the area of a 5 by 6 rectangle", function() {
  const area = utils.area(5,6);
  expect(area).to.be.a("number");
  expect(area).to.be.equal(30);
  assert.isNumber(area);
});

it("should return the area of a circle of radius 5", function() {
  const area = utils.circleArea(5);
  expect(area).to.be.a("number")
  expect(area).to.be.equal(Math.PI*25)
});

// ========================================================
// Challenges
// ========================================================

// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.

it("Should create a new (object) Item with name and price", function() {
  const item = new Object();
  item.name = "Nachos";
  item.price = 15;
  expect(item.name).to.be.a("string");
  expect(item.price).to.be.a("number")
});

it("Should return an array containing all items in cart", function() {
  const array = ["item 1", "item 2", "item 3"];
  expect(array).to.be.a("array");
  expect(array).to.include("item 1", "item 2", "item 3");
  expect("item 1").to.be.a("string")
});

it("Should add a new item to the shopping cart");

it("Should return the number of items in the cart");

it("Should remove items from cart");

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart");

it("Should remove an item when count is 0");

it("Should return the total cost of all items in the cart");
