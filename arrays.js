var chocolateBars = [
  'snickers', 'hundred grand', 'kitkat', 'skittles'
  ];
function addElementToBeginningOfArray(array, element) {
   return array.unshift(element);
}
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}
function destructivelyAddElementToBeginningOf