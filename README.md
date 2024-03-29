# **Helper methods**
A package that provides helper methods for common and not-so-common use cases

## **Contributions are welcome!**

## Installation
```sh
npm install helper-methods-js
```

## Methods
- [**`deepcopy`**](#deepcopy)
- [**`dedupe`**](#dedupe)
- [**`indexesOf`**](#indexesOf)
- [**`isAsyncFunction`**](#isAsyncFunction)
- [**`trimDelimeters`**](#trimDelimeters)

<br />

---
<br />

### **`deepcopy`**

This method creates a deep copy of the provided object to the given depth. Beyond that depth, the object is shallow copied

| Parameter     | Description     | Default Value |
| :------------ |:---------------| :-------------|
| `obj`           | The object to be copied                | N/A             |
| `max_depth` (optional)     | Maximum depth to which the function would copy the object. Beyond this depth shallow copies would be created. A value of `0` implies that the entire object should be deep copied.    | `0`             |

<br />

#### Sample usage
```js
import { deepcopy } from 'helper-methods-js'

deepcopy({ name: 'bob' }, 0);
```
---
<br />

### **`dedupe`**

This method provides implementation to remove duplicates from an array.

| Parameter     | Description     | Default Value |
| :------------ |:---------------| :-------------|
| `array`           | The array that needs duplicates removed                | N/A             |
| `condition` (optional)    | A function that returns either `true` or `false`. This condition is executed for each array value and the values for which it returns `true` are removed. In case this condition is not provided, elements are removed on equality comparison.    | N/A             |

<br />

#### Sample usage
```js
import { dedupe } from 'helper-methods-js'

const cars = [
  { name: "audi", owner: "a" },
  { name: "bmw", owner: "x" },
  { name: "audi", owner: "b" },
  { name: "bmw", owner: "b" },
];

dedupe(cars, (e, i) => e.owner === i.owner)
```
---
<br />

### **`indexesOf`**

This method provides implementation to return indexes of all elements that match a specific condition

| Parameter     | Description     | Default Value |
| :------------ |:---------------| :-------------|
| `array`           | The array that needs duplicates removed                | N/A             |
| `condition`    | It can either be a value or a functions. In case of a function, the function should return `true` or `false`. This condition is executed for each array value and the values for which it returns `true` are added to the list of indexes returned. In case this condition is not provided, elements are removed on equality comparison.    | N/A             |

<br />

#### Sample usage
```js
import { indexesOf } from 'helper-methods-js'

const objs = [
  { age: 21, nationality: "a" },
  { age: 24, nationality: "a" },
  { age: 21, nationality: "b" },
  { age: 32, nationality: "c" },
  { age: 42, nationality: "b" },
  { age: 52, nationality: "c" },
  { age: 21, nationality: "a" },
]

const indexes = indexesOf(objs, (i: any) => i.nationality === "b")
```
---
<br />

### **`isAsyncFunction`**

This method returns whether a function is async or not.

| Parameter     | Description     | Default Value |
| :------------ |:---------------| :-------------|
| `fn`    | The function for which it needs to be determined whether it is async or not.    | N/A             |

<br />

#### Sample usage
```js
import { isAsyncFunction } from 'helper-methods-js'

const testFn = async () => {};
isAsyncFunction(testFn) // returns true

const testFnSync = () => {};
isAsyncFunction(testFnSync) // returns false
```
---
<br />

### **`trimDelimeters`**

This method takes a string and removes the provided delimeters from the start and end of the string.

| Parameter     | Description     | Default Value |
| :------------ |:---------------| :-------------|
| `str`           | The string to be trimed                | N/A             |
| `delimeters`    | A list of delimeters to be trimned from the start and/or end of the string provided.    | N/A             |
| `options` (optional)    | An object with values `trimStart` and `trimEnd` that represent if the string should only be trimmed from start and/or end respectively.     | `{ trimStart: true, trimEnd: true }`            |

<br />

#### Sample usage
```js
import { trimDelimeters } from 'helper-methods-js'

trimDelimeters("&&*ABC*(&", ["&", "*"]) // outputs "ABC*("
```
