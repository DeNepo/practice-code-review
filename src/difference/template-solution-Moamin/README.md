# challenge name: strategy name

Two arrays difference.

---

## Strategy

Iteration though the 1st array element and comparing with the 2nd array elements

---

## Implementation

* Through checking each element of array by using the array method `.forEach`
* Checking each element fo array if it's existed in the 2nd array "values" using array method `.includes`
* By using `if condition` for the checking, the items which are not existed in "values" will be `push` to the new array
* Returning the new array

---

## Use Cases

* Could be used to highlight new users registering for certain service.

* Could be used for security system as giving an alarm when a new element -not saved at the database- is detected.

---

## Inspiration

After watching Sunday's study group, the group led by Samir. I found the code is clean and easy to understand.
<!--
  was there any code, blog post, video, ... that inspired your solution?
  there's nothing wrong with adapting other people's code, just give them credit!
  and say how it inspired your solution.
-->
