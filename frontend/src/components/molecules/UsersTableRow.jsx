import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export const UsersTableRow = ({user, index, deleteFunction, viewFunction}) => (
    <tr>
        <th>{index}</th>
        <td>{user.name}</td> 
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
            <Link to={`/user/${user.id}`}><button type="button" className="btn btn-info">View</button></Link>
            <button type="button" onClick={deleteFunction} className="btn btn-danger userTableRowDelete">Delete</button>
        </td>
    </tr>
)

function deleteFunction(id)
{

}

function viewFunction(id)
{
    
}