// Write your solution in this file!
const employee = {
    name: "Tobase",
    streetAddress: "123 Main Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value){

    const newEmployee = { ...employee };

    newEmployee[key] = value;
    return newEmployee;

};
 employee = updateEmployeeWithKeyAndValue




 function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; //Why are we using bracket notation here?
  
    return obj;
  }

  const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Tob");

  newEmployee;

  function deleteFromEmployeeByKey(object, key) {
    var newObj = Object.assign({}, object);
    delete newObj[key];
    return newObj;
  }

  function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
  }