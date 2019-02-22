import React, { Component } from 'react';

export const UsersTableRow = ({user, index, deleteFunction}) => (
    <tr>
        <th>{index}</th>
        <td>{user.name}</td> 
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
            <button type="button" className="btn btn-info">View</button>
            <button type="button" onClick={deleteFunction} className="btn btn-danger userTableRowDelete">Delete</button>
        </td>
    </tr>
)
