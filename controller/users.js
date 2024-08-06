import { v4 as uuidv4 } from 'uuid';


let users = [
    // {
    //     FirstName:"Nivetha",
    //     LastName:"Nagavelan",
    //     age:25
    // }
];

export const getUsers = (req,res)=>{
    res.send(users);
    
}

export const createUser = (req,res)=>{
    
    //res.send('POST ROUTE REACHED');

    const user = req.body;

   // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    
    const userWithId = {...user, id: uuidv4()}

    users.push(userWithId);
    res.send(`User with the name:  ${user.FirstName} added to the database`);

};

export const getUser = (req,res)=>{
    const {id} = req.params;

    const foundUser =  users.find((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser = (req,res)=>{
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database`);
}

export const updateUser = (req,res) =>{
    const { id } = req.params;
    const { FirstName, LastName,age } = req.body;
    const user = users.find((user) => user.id === id);
    
    if(FirstName){
        user.FirstName = FirstName;
    }
    if(LastName){
        user.LastName = LastName;
    }
    if(age){
        user.age = age;
    }
    res.send(`User with the id ${id} updated`);
}