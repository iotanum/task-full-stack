import React from 'react';
import { get, isEmpty } from 'lodash'
import {InputField} from '../molecules/InputField'
import {validateForm, getFormData} from '../../resources/utils/validations'
import config from '../../config'

export class UserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: {}
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { user } = this.props
        const errors = validateForm("user-form")
        this.setState({errors: errors})
        if (isEmpty(errors))
        {
            const userPayload = { 
                id: user.id,
                ...getFormData("user-form") 
            }
            
            fetch(`${config.apiUrl}/user/${userPayload.id}/update`, {
                method: "POST", 
                body: JSON.stringify(userPayload),
            })
            .then(response => {
                const promise = response.json()
                promise.then(value => {
                    console.log(value)
                })
            })
        }
    }

    render() {
        const { user, submitButtonText } = this.props
        const { errors } = this.state
        return (
            <form className="user-form" id="user-form" onSubmit={this.onSubmit}>
            <div className="user-form-inputs-wrapper">
                <div className="user-form-first-column">
                    <InputField label='Name' name='name' id='name' type='text' rules="required,name" value={get(user, 'name', '')} error={get(errors, 'name[0]', '')}></InputField>
                    <InputField label='Username' name='username' id='username' type='text' rules="required,text" value={get(user, 'username', '')} error={get(errors, 'username[0]', '')}></InputField>
                    <InputField label='Email' name='email' id='email' type='text' rules="required,email" value={get(user, 'email', '')} error={get(errors, 'email[0]', '')}></InputField>
                    <InputField label='Street' name='address_street' id='address_street' rules="text" type='text' value={get(user, 'address_street', '')} error={get(errors, 'address_street[0]', '')}></InputField>
                    <InputField label='Suite' name='address_suite' id='address_suite' type='text' rules="textLength" value={get(user, 'address_suite', '')} error={get(errors, 'address_suite[0]', '')}></InputField>
                    <InputField label='City' name='address_city' id='address_city' type='text' rules="text" value={get(user, 'address_city', '')} error={get(errors, 'address_city[0]', '')}></InputField>
                    <InputField label='ZipCode' name='address_zipcode' id='address_zipcode' type='text' rules="zipcode" value={get(user, 'address_zipcode', '')} error={get(errors, 'address_zipcode[0]', '')}></InputField>
                </div>
                <div className="user-form-second-column">
                    <InputField label='Latitude' name='geo_lat' id='geo_lat' type='text' rules="geo" value={get(user, 'geo_lat', '')} error={get(errors, 'geo_lat[0]', '')}></InputField>
                    <InputField label='Longtitude' name='geo_lng' id='geo_lng' type='text' rules="geo" value={get(user, 'geo_lng', '')} error={get(errors, 'geo_lng[0]', '')}></InputField>
                    <InputField label='Phone' name='phone' id='phone' type='text' rules="phone" value={get(user, 'phone', '')} error={get(errors, 'phone[0]', '')}></InputField>
                    <InputField label='Website' name='website' id='website' type='text' rules="website" value={get(user, 'website', '')} error={get(errors, 'website[0]', '')}></InputField>
                    <InputField label='Company Name' name='company_name' id='company_name' type='text' rules="textLength" value={get(user, 'company_name', '')} error={get(errors, 'company_name[0]', '')}></InputField>
                    <InputField label='Company Catchphrase' name='company_catchPhrase' id='company_catchPhrase' type='text' rules="textLength" value={get(user, 'company_catchPhrase', '')} error={get(errors, 'company_catchPhrase[0]', '')}></InputField>
                    <InputField label='Company Bs' name='company_bs' id='company_bs' type='text' rules="textLength" value={get(user, 'company_bs', '')} error={get(errors, 'company_bs[0]', '')}></InputField>
                </div>
            </div>
                <button className='btn btn-primary' type='submit'>{submitButtonText}</button>
            </form>
        )}}