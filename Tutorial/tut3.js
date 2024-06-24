"use strict";
const printID = (id) => {
    console.log("ID: " + id);
};
printID(1233);
const signContract = (employee) => {
    console.log("Contract signed by " + employee.name + " with email: " + employee.email);
};
signContract({ name: "Pedro", creditScore: 800, id: 32, email: "pedro@gmail.com" });
