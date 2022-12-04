
/**
 * @params `obj`: Object to be copied
 * @params `max_depth` (optional): The depth till which unique copies should be created. Value of 1 means root of the object passed. Defaults to 0 (copies till lowest depth)
 * 
 * @returns Copy of object
 */

const deepcopy = (obj: object, max_depth = 0) => {
	return deepcopyHelper(obj, 1, max_depth)
}

const deepcopyHelper = (obj: object, depth: number, max_depth: number) => {
	if (max_depth > 0 && depth > max_depth) return obj;
  if (typeof obj !== "object" && !Array.isArray(obj)) return obj
  
	const copy: any = Array.isArray(obj) ? [...obj] : {...obj};
  for (const key of Object.keys(copy)) {
    if (Array.isArray(copy[key])) {
    	copy[key] = [...copy[key]]
      for (let i = 0; i < copy[key].length; i++) {
      	copy[key][i] = deepcopyHelper(copy[key][i], depth + 1, max_depth);
      }
    } else if (typeof copy[key] === "object") {
    	copy[key] = deepcopyHelper(copy[key], depth + 1, max_depth);
    } 
  }
  
  return copy
}

export { deepcopy };