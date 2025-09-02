export const questions = [
  {
    id: 1,
    question: 'What is the difference between var, let, and const?',
    answer:
      'In Javascript, var is function-scoped and can be re-declared; let and const are block-scoped, with let allowing re-assignment and const preventing it. However, const objects can have their contents modified.',
  },
  {
    id: 2,
    question: 'What is the difference between == and === in JavaScript?',
    answer:
      '== performs type coercion before comparing values, while === compares both value and type without coercion.',
  },
  {
    id: 3,
    question: 'What are arrow functions in JavaScript?',
    answer:
      'Arrow functions are a shorter syntax for function expressions. They do not have their own this binding and are often used for callbacks or methods where lexical scoping of this is preferred.',
  },
  {
    id: 4,
    question: 'What is the difference between null and undefined?',
    answer:
      'undefined means a variable has been declared but not assigned a value, while null is an assigned value that represents no value or empty.',
  },
  {
    id: 5,
    question: 'What is a closure in JavaScript?',
    answer:
      'A closure is created when a function retains access to variables in its lexical scope, even after the outer function has returned.',
  },
  {
    id: 6,
    question: 'What is event delegation in JavaScript?',
    answer:
      'Event delegation is a technique where you attach a single event listener to a parent element to manage events on its child elements using event bubbling.',
  },
  {
    id: 7,
    question:
      'What is the difference between synchronous and asynchronous code?',
    answer:
      'Synchronous code runs line by line, blocking execution until each operation is complete, while asynchronous code allows operations to run in the background without blocking execution.',
  },
  {
    id: 8,
    question: 'What are promises in JavaScript?',
    answer:
      'A promise is an object that represents the eventual completion or failure of an asynchronous operation, with states: pending, fulfilled, or rejected.',
  },
  {
    id: 9,
    question: 'What is async/await in JavaScript?',
    answer:
      'async/await is syntactic sugar over promises, allowing asynchronous code to be written in a synchronous style for readability.',
  },
  {
    id: 10,
    question: 'What is the difference between map() and forEach()?',
    answer:
      'map() creates a new array with the results of calling a function on every element, while forEach() simply executes a function for each element without returning a new array.',
  },
  {
    id: 11,
    question: 'What is hoisting in JavaScript?',
    answer:
      'Hoisting is JavaScript’s default behavior of moving declarations to the top of the scope before code execution. var declarations are hoisted and initialized with undefined, while let and const are hoisted but not initialized.',
  },
  {
    id: 12,
    question: 'What is the difference between shallow copy and deep copy?',
    answer:
      'A shallow copy copies only references to nested objects, while a deep copy creates entirely new nested objects, independent of the original.',
  },
  {
    id: 13,
    question: 'What is the difference between call(), apply(), and bind()?',
    answer:
      'call() invokes a function with arguments listed individually, apply() invokes with arguments as an array, and bind() returns a new function with a fixed this context.',
  },
  {
    id: 14,
    question: 'What are higher-order functions?',
    answer:
      'Higher-order functions are functions that take other functions as arguments or return them as results, such as map, filter, and reduce.',
  },
  {
    id: 15,
    question:
      'What is the difference between function declaration and function expression?',
    answer:
      'Function declarations are hoisted, meaning they can be called before they appear in code. Function expressions are not hoisted and must be defined before being used.',
  },
  {
    id: 16,
    question: 'What are JavaScript modules?',
    answer:
      'Modules allow code to be split into reusable files. They use export to share code and import to bring it into another file.',
  },

  {
    id: 17,
    question:
      'What is the difference between localStorage, sessionStorage, and cookies?',
    answer:
      'localStorage stores data with no expiration, sessionStorage stores data for the duration of a session, and cookies store small amounts of data with expiration dates and are sent with HTTP requests.',
  },
  {
    id: 18,
    question:
      'What is the difference between mutable and immutable objects in JavaScript?',
    answer:
      'Mutable objects can be changed after creation, while immutable objects cannot. For example, arrays are mutable, while strings are immutable.',
  },
  {
    id: 19,
    question:
      'What is the difference between synchronous and asynchronous iteration?',
    answer:
      'Synchronous iteration processes one item at a time in sequence, while asynchronous iteration allows awaiting asynchronous operations for each item using for await...of.',
  },
  {
    id: 20,
    question: 'What is the difference between prototype and __proto__?',
    answer:
      'prototype is a property of constructor functions used for inheritance, while __proto__ is an internal property of objects that points to the prototype they were created from.',
  },
];
