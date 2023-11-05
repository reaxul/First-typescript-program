// destructuring
{

    
    //object destructuring
    const user = {
    id: 345,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    },
    age: 30,
    company: 'Google BD',
    }

    const { name: { firstName, lastName }, age, company } = user;


    //array destructuring
    const userArray = ['michen', 'jordan', 'kobe', 'lebron', 'shaq', 'josh', 'james'];
    const [first, second, third, fourth, fifth] = userArray;
    const [,,,bestFriend,...rest] = userArray;

    console.log(first, second, third, fourth, fifth);
    console.log(bestFriend, ...rest);


}