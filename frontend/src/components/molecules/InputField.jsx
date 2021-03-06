import React, { Component } from 'react';

export const InputField = ({ id, label, name, value, type, error, rules }) => (
    <fieldset>
        <label className="control-label" htmlFor={name}>{label}</label>
        <input className={`input-field form-control ${error ? 'invalid' : ''}`} data-rules={rules} id={id} name={name} defaultValue={value} type={type}></input>
        <div className='error-message-wrapper'><span className='error-message'>{error}</span></div>
    </fieldset>
)