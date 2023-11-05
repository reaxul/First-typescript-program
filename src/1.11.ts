
//ternary operator || optional chaining || nullish coalescing operator
{


    const age: number = 30;
    if (age>=18) {
        console.log('You are adult');
    }else{
        console.log('You are child');
    }

    //ternary operator
    const isAdult = age >= 18 ? 'adult' : 'child';
    console.log({isAdult});


    //nullish coalescing operator
    // null || undefined decision making

    const isAuthenticated = null; // const isAuthenticated = undefined;
    const result = isAuthenticated ?? 'guest';
    const result2 = isAuthenticated ? isAuthenticated : 'guest';
    console.log({result},{result2});





    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string
        }
    }


    const user: User = {
        name: "John",
        address: {
            city: "ctg",
            road: "Awesome Road",
            presentAddress: "ctg town"
        },
    };
   const permanentAddress = user?.address?.permanentAddress ?? "Not Available"  //nullish coalescing operator
    console.log({permanentAddress});
   

}