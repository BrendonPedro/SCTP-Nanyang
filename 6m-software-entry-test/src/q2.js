/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: Declare an array to store patients' names
const patients = []; //Initializing as an empty array

// Task 2: Add a patient's name into the array
function addPatient(patientName){
    patients.push(patientName); //Adding push method to add new patient names to the end of the array
}

// Task 3: Implement listPatient() function
function listPatient() {
    console.log(patients); //Print array
}

addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(); // This should list ["John", "Mary", "Mark"]