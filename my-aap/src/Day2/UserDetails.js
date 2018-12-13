import React from 'react';

const UserDetails = (props) => {
    const userData = props.userJSON;
    const userList = userData.map(el => {
        return (
            <tr key={el.id}>
                <td> {el.name} </td>
                <td> {el.age} </td>
                <td> {el.gender} </td>
                <td> {el.email} </td>
                <td> {el.isActive.toString()} </td>
            </tr>
        )
    })
    return (
        <tbody>
            {userList}
        </tbody>
    );
};

export default UserDetails;