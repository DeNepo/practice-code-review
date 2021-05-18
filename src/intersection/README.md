# challenge name: strategy name

<!-- BEGIN DOCS -->

<a name="arrayIntersection"></a>

## arrayIntersection ⇒ <code>Array</code>

Creates an array of values that are in both the first and the second arrays.

**Returns**: <code>Array</code> - Returns the new array of filtered values.

| Param    | Type               | Default         | Description            |
| -------- | ------------------ | --------------- | ---------------------- |
| [array]  | <code>Array</code> | <code>[]</code> | The array to inspect.  |
| [values] | <code>Array</code> | <code>[]</code> | The values to exclude. |

> Docs generated: Tue May 18 2021, 11:09:46 AM

<!-- END DOCS -->

---

## Strategy

I chose to used built-in array and object methods to solve this challenge, because once you know them they are easy to read and save a lot of lines and time.

---

## Implementation

I use an `if` and `else` statement:

1. The `if` statement reflects that if the argument is non an array throws an error.
2. The `else` if is an array, I will follow the next steps:

- Use the `filter()` method to have a new array with only the elements that match.
- Use the constructor `Set()` to store only unique values of the array, _the result will be an object_.
- use the spread operator in brackets to convert the object in an array

There was a tricky thing I had to figure out:

Is that the return value of the Set constructor in an object, and using it with the spread operator inside of brackets converts the object in to an array ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set))

---

## Use Cases

Create an array showing a list of students that are in two groups

```js
const group1 = {
  student1: "Oksana Shulha",
  student2: "Mayuri Patil",
  student3: "Erkam Guresen",
  student4: "Emely Salmeron",
  student5: "Rafael Garcia",
};

const group2 = {
  student1: "Evan cole",
  student2: "Furkan Kilic",
  student3: "Inggrite Novaleta",
  student4: "Emely Salmeron",
  student5: "Rafael Garcia",
};

console.log(arrayIntersection(Object.values(group1), Object.values(group2))); //=> ["Emely Salmeron", "Rafael Garcia"]
```

---

## Inspiration

* Behavior strategy implementation module, from [HYF Belgium](https://hackyourfuture.be/), is good guide that help us to expands the uses of code.

* [JavaScript: The Definitive Guide, 7th Edition](https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/)
<!--
  was there any code, blog post, video, ... that inspired your solution?
  there's nothing wrong with adapting other people's code, just give them credit!
  and say how it inspired your solution.
-->
