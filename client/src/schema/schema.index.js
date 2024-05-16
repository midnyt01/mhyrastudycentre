import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const ContactSchema = Yup.object({
    FullName: Yup.string().min(2).max(25).required('Please enter your full name'),
    Email: Yup.string().email('Invalid email address').required('Required'),
    PhoneNumber: Yup.string().min(10).max(13).matches(phoneRegExp, 'Phone number is not valid'),
})

export const SamplePaperSchema = Yup.object({
    FullName: Yup.string().min(2).max(25).required('Please enter your full name'),
    PhoneNumber: Yup.string().min(10).max(10).matches(phoneRegExp, 'Phone number is not valid'),
    SchoolName: Yup.string().min(2).max(50).required('Please enter valid School name'),
})