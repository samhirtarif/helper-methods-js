/**
 * @params `array`: Array that needs to have duplicates removed
 * @params `condition` (optional): Condition that should be used to de-duplicate provided array
 * 
 * @returns an array with duplicates removed
 */

const dedupe = (array: Array<any>, condition?: (element: any, item: any) => boolean) => {
	const deudped: Array<any> = []
  array.forEach((item) => {
  		if (condition) {
      	const elementExist = deudped.some(element => condition(element, item))
        if (!elementExist) {
        	deudped.push(item);
        }
      } else if (deudped.indexOf(item) === -1) {
      	deudped.push(item);
      } 
  })
  return deudped
}

export { dedupe }