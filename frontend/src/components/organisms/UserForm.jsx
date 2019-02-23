import React from 'react';
import {InputField} from '../molecules/InputField'
import {validateForm} from '../../resources/utils/validations'

export class UserForm extends React.Component {
    constructor(props) {
        super(props)
        this.setState = {}
    }

    validate(){console.log(this)}

    componentDidMount () {
        console.log(validateForm("user-form"))
    }

    render() {
        const { user } = this.props
        return (
            <form className="user-form" id="user-form">
            <div className="user-form-inputs-wrapper">
                <div className="user-form-first-column">
                    <InputField label='Name' name='name' id='name' type='text' value={user.name}></InputField>
                    <InputField label='Username' name='username' id='username' type='text' value={user.username}></InputField>
                    <InputField label='Email' name='email' id='email' type='text' value={user.email}></InputField>
                    <InputField label='Street' name='address_street' id='address_street' type='text' value={user.address_street}></InputField>
                    <InputField label='Suite' name='address_suite' id='address_suite' type='text' value={user.address_suite}></InputField>
                    <InputField label='City' name='address_city' id='address_city' type='text' value={user.address_city}></InputField>
                    <InputField label='ZipCode' name='address_zipcode' id='address_zipcode' type='text' value={user.address_zipcode}></InputField>
                </div>
                <div className="user-form-second-column">
                    <InputField label='Latitude' name='geo_lat' id='geo_lat' type='text' value={user.geo_lat}></InputField>
                    <InputField label='Longtitude' name='geo_lng' id='geo_lng' type='text' value={user.geo_lng}></InputField>
                    <InputField label='Phone' name='phone' id='phone' type='text' value={user.phone}></InputField>
                    <InputField label='Website' name='website' id='website' type='text' value={user.website}></InputField>
                    <InputField label='Company Name' name='company_name' id='company_name' type='text' value={user.company_name}></InputField>
                    <InputField label='Company Catchphrase' name='company_catchPhrase' id='company_catchPhrase' type='text' value={user.company_catchPhrase}></InputField>
                    <InputField label='Company Bs' name='company_bs' id='company_bs' type='text' value={user.company_bs}></InputField>
                </div>
            </div>
                <button className='btn btn-primary' type='submit'>Save</button>
            </form>
        )}}