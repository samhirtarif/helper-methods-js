# **Helper methods**
A package that provides helper methods for common and not-so-common use cases

## Installation
```sh
npm install helper-methods-js
```

## Methods
- [**`deepcopy`**](#deepcopy)
- [**`dedupe`**](#dedupe)

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