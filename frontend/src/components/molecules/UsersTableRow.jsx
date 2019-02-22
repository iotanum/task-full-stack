import React, { Component } from 'react';

export const UsersTableRow = ({user, index, deleteFunction}) => (
    <tr>
        <th>{index}</th>
        <td>{user.name}</td> 
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.address_city}</td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
        <td>{user.company_name}</td>
        <td>
            <button type="button" class="btn btn-info">Edit</button>
            <button type="button" onClick={deleteFunction} class="btn btn-danger userTableRowDelete">Delete</button>
        </td>
    </tr>
)
