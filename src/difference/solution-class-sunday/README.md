# Difference: solution-class-sunday

<!-- BEGIN DOCS -->

Creates an array of values that are in the first array, but not not in the second array.
Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.

<!-- END DOCS -->

---

## Strategy

1. Select the values from the second array that are not included into the first one
2. Create an array which contains only selected items

---

## Implementation

1. Create the criteria for filtering – values not included into first array
2. Create a new array with using the ‘filter’ array method

---

## Use Cases

We can use this function to compare assortment of two stores and to see what items are sold only in the first store.

```js
const firstStoreUniqueItems = (firstStore = [], secondStore = []) => {
  // create an array where we will put the filtered valued
  const isUniqueItem = (item) => {
    return !secondStore.includes(item);
  };
  const uniqueAssortment = firstStore.filter(isUniqueItem);
  return uniqueAssortment;
};
```

## Inspiration

<!--
  was there any code, blog post, video, ... that inspired your solution?
  there's nothing wrong with adapting other people's code, just give them credit!
  and say how it inspired your solution.
-->
