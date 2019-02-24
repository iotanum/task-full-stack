import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import config from '../../config'

export const UsersTableRow = ({user, index, updateUsers}) => (
    <tr>
        <th>{index}</th>
        <td>{user.name}</td> 
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
            <Link to={`/user/edit?id=${user.id}`}><button type="button" className="btn btn-info">View</button></Link>
            <button type="button" onClick={() => {
                const userPayload = {id: user.id}
                fetch(`${config.apiUrl}/user/remove`, {
                    method: 'POST',
                    body: JSON.stringify(userPayload)
                })
                .then(response => {
                    const promise = response.json()
                    promise.then(value => {
                        updateUsers()
                    })
                })
            }} className="btn btn-danger userTableRowDelete">Delete</button>
        </td>
    </tr>
)
