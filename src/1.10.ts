{
    
    
    //Union types
    type User = {
        readonly name: string;
        age: number; //optional type
        email?: string | null; 
        gender:'male'| 'female'| 'other';
    };
    const user:User = {
        name: 'John',
        age: 30,
        gender: 'male'
    }


    //intersection types
    type FrontendDeveloper = {
        skills: string[];
        designationl: 'Frontend Developer'
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }
    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper
    
    const fullstackDeveloper: FullstackDeveloper = {
        skills: ['react', 'nodejs', 'mongodb'],
        designationl: 'Frontend Developer',
        designation2: 'Backend Developer'
    }





}