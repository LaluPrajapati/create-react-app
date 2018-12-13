import React from 'react';

const HelloWorld = () => {
    return (
        <div>
            <Header />
            <Users />
        </div>
    );
};

const Header = () => {
    const isUserLoggedIn = false;
    return(
        <div className="App-header">
            {isUserLoggedIn ? 'Lalu' : <button className='btn-login'>Log in</button>}
        </div>
    );
};

const Users = () => {
    const users = [
          {
            "_id": "58613042d144513fd8c03bbc",
            "isActive": true,
            "age": 38,
            "name": "Noelle Finch",
            "gender": "female",
            "email": "noellefinch@codax.com"
          },
          {
            "_id": "58613042f1ddd22998f7c02f",
            "isActive": false,
            "age": 40,
            "name": "Dominique Middleton",
            "gender": "female",
            "email": "dominiquemiddleton@codax.com"
          },
          {
            "_id": "58613042b6f22acfb34097da",
            "isActive": true,
            "age": 21,
            "name": "Beulah Hoover",
            "gender": "female",
            "email": "beulahhoover@codax.com"
          },
          {
            "_id": "5861304228670a96b75bde35",
            "isActive": false,
            "age": 26,
            "name": "Casey Acosta",
            "gender": "male",
            "email": "caseyacosta@codax.com"
          },
          {
            "_id": "586130424d77931fe3e26704",
            "isActive": true,
            "age": 36,
            "name": "Kathleen Parsons",
            "gender": "female",
            "email": "kathleenparsons@codax.com"
          },
          {
            "_id": "58613042b81ed4aea4f8bdd1",
            "isActive": true,
            "age": 32,
            "name": "Tami Morse",
            "gender": "female",
            "email": "tamimorse@codax.com"
          },
          {
            "_id": "5861304235cd4776fd7ce5a7",
            "isActive": false,
            "age": 28,
            "name": "Annette Whitaker",
            "gender": "female",
            "email": "annettewhitaker@codax.com"
          }
    ];

    const userList = users.map(el =>{
        return (
            <tr key={el.id}>
                <td> {el.name} </td>
                <td> {el.age} </td>
                <td> {el.gender} </td>
                <td> {el.email} </td>
                <td> {el.isActive.toString()} </td>
            </tr>
            )
    });

    return(
        <table>
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Status</th>
            </thead>
            <tbody>
                {userList}
            </tbody>
        </table>
    )
}

export default HelloWorld;