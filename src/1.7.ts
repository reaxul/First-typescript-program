{



    const friends1: string[] = ["John", "Doe", "Alex", "Smith"];
    const friends2: string[] = ["Rahim", "Karim", "Rafiq", "Jabbar"];
    
    // friends1.push(friends2); //
    friends1.push(...friends2);


    const greetFriend1 = (...friends: string[]): void => {
        friends.forEach((friend: string): void => {
            console.log(`Hello ${friend}`);
        });
    };
    greetFriend1(...friends1);



}