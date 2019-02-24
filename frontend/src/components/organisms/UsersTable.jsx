import React from 'react';
import {UsersTableRow} from '../molecules/UsersTableRow'

export const UsersTable = ({users, updateUsers}) => (
    <table className="table table-primary users-table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th> 
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        {users.map((user, index) => {
            return <UsersTableRow user={user} index={index+1} key={index+1} updateUsers={updateUsers}/>
        })}
        </tbody>
    </table>
    )