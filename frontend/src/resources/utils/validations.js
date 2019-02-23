const rules = {
    required: /^$|\s+/,
    name: /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/,
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    zipcode: /^\d{5}(?:[-\s]\d{4})?$/,
    geo: /^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/,
    phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    website: /@^(http\:\/\/|https\:\/\/)?([a-z0-9][a-z0-9\-]*\.)+[a-z0-9][a-z0-9\-]*$@i/,
    text: /^(?=.{5,30}$)[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/
}

const errors = {
    required: 'This field is required!',
    name: 'Name must contain a whitespace and must be between 1-20 characters!',
    email: 'Email format is wrong!',
    zipcode: 'Zip code format is wrong!',
    geo: 'Wrong coordinates format!',
    phone: 'Phone format is wrong!',
    website: 'Website format is wrong!',
    text: 'Too much characters!',
}

export const validateForm = formId => {
    console.log(document.getElementById(formId))
}