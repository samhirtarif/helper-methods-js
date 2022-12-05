/**
 * @params `array`
 * @params `condition`: Condition to match when getting indexes. This can be a function or any object / value
 * 
 * @returns an array with indexes that satisfy provided condition
 */

 const indexesOf = (array: Array<any>, condition: Function | any) => {
	return array.reduce(function(acc, item, index) {
    if (condition instanceof Function &&  condition(item))
      acc.push(index);
    else if (item === condition)
      acc.push(index);
    return acc;
  }, []);
}

export { indexesOf }