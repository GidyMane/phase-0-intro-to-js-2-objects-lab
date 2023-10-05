// Write your solution in this file!
const employee ={
    name: "Gideon",
    streetAddress:"I-Street"
};
function updateEmployeeWithKeyAndValue(employee, key, value){

    const updatedEmployee = { ...employee };

    // Update the value for the specified key in the new object
    updatedEmployee[key] = value;
  
    // Return the new object with the updated value
    return updatedEmployee;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    
    employee[key] = value;

    return employee;
  };


  function deleteFromEmployeeByKey(employee, key){

    const deletedEmployee = {...employee };

   delete deletedEmployee[key];

    return deletedEmployee;

  } ;

  function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key];

    return employee;

  } 