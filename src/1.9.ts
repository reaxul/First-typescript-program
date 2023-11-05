
//Type Alias
{
    //Primitive Type -->string, number, boolean, undefined, null, symbol, bigint
    type UserName = string;
    type UserAge = number;
    type IsAdmin = boolean;
    const userName: UserName = "John";
    const userAge: UserAge = 30;
    const isAdmin: IsAdmin = true;


    //Reference Type -->object
    type User = {
        readonly name: string;
        age: number; //optional type
        company?: "Google BD"; //literal type
        contact: string; 
        address: string;
    };

    const user: User = {
        name: "John",
        age: 30,
        company: "Google BD",
        contact: "+880123456789",
        address: "Dhaka, Bangladesh"
    };
    const user2: User = {
        name: "Doe",
        age: 45,
        contact: "+880123456789",
        address: "Chattagram, Bangladesh"
    };


    //Reference Type -->function
    type AddFn = (num1: number, num2: number) => number; //declare the function type
    const sum:AddFn = (num1, num2) => num1 + num2;










}