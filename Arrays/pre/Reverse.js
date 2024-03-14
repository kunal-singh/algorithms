/**
 * Function to reverse a given Array
 * @param {Array} array - Given array to reverse
 * @returns {Array}
 */
const Reverse = (array) => {
  if(array === null || array === undefined){
    throw new Error(`unefined or null array provided`);
  }
  if(!Array.isArray(array)){
    throw new error(`provided argument not an Array`);
  }
  let newArr = [];
  for (let i = array.length - 1; i >= 0 ; i-- ){
     newArr.push(array[i]);
  }
  return newArr;
}

export default Reverse;

