function joinedObjects(object1, object2) {
  const completeObject = {
    ...object1,
    ...object2,
  };
  return completeObject;
}

const result = joinedObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
console.log(result); //{a: 1, b: 2, c: 3, d: 4}
