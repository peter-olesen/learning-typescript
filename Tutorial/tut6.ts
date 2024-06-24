interface EmployeeDB {
    readonly employeeId: number,
    readonly startDate: Date,
    name: string,
    department: string,
}

const employee: EmployeeDB = {
    employeeId: 123,
    startDate: new Date(),
    name: "First and Last",
    department: "Marketing",
}

employee.name = "Jessie";

console.log(employee);
