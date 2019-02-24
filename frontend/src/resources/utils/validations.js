const rulesRegex = {
    required: /^$|\s+/,
    name: /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/,
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    zipcode: /^\d{5}(?:[-\s]\d{4})?$/,
    geo: /^-?([1-8]?[0-9]\.{1}\d{1,6}$|90\.{1}0{1,6}$)/,
    phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    website: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
    text: /^[a-zA-Z0-9_ ]*$/,
    textLength: /\w{1,10}\b/
}

const errors = {
    required: 'This field is required!',
    name: 'Name must contain a whitespace and must be between 1-20 characters!',
    email: 'Email format is wrong!',
    zipcode: 'Zip code format is wrong!',
    geo: 'Wrong coordinates format!',
    phone: 'Phone format is wrong!',
    website: 'Website format is wrong!',
    text: 'This field cannot contain special characters!',
    textLength: 'Too many characters!'
}

const validateField = (field) =>
{
    const rules = field.getAttribute('data-rules').split(',')
    const value = field.value
    const fieldErrors = []
    if (rules)
    {
        rules.forEach(rule => {
            if (rule === 'required')
            {
                if (!value) fieldErrors.push(errors.required)
            }
            else {
                if (!rulesRegex[rule].test(value))
                {
                    fieldErrors.push(errors[rule])
                }
            }
        }) 
    }
    return fieldErrors
}

export const getFormData = formId => {
    let dataObject = {}
    const form = document.getElementById(formId)
    const fields = form.getElementsByTagName('input')
    for (let field of fields) {
        dataObject = {...dataObject, [field.id]: field.value}
    }
    return dataObject
}

export const validateForm = formId => {
    let errors = {}
    const form = document.getElementById(formId)
    const fields = form.getElementsByTagName('input')
    for (let field of fields) {
        const errorsTemp = validateField(field)

        if (errorsTemp.length !== 0) {
            errors={...errors, [field.id]: errorsTemp}
        }
          
    }

    return errors
}