type IDFieldType = string | number;

const printID = (id: IDFieldType) => {
    console.log("ID: " + id);
}

printID(1233);

interface BusinessPartner {
    name: string,
    creditScore: number;
}

interface UserIdentity {
    id: number, 
    email: string;
}

type Employee = BusinessPartner & UserIdentity

const signContract = (employee: Employee): void => {
    console.log("Contract signed by " + employee.name + " with email: " + employee.email);
}

signContract({name: "Pedro", creditScore: 800, id: 32, email: "pedro@gmail.com"})