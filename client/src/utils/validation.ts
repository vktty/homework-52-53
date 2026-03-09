import * as Yup from 'yup'

export const validationSchema = Yup.object({
    name: Yup.string().required('This is a required field').min(2, 'Your name must be at least 2 characters long!').max(35, 'Your name is too long!'),
    email: Yup.string().required('This is a required field').email('Your email is not valid!'),
    password: Yup.string().required('This is a required field').min(5, 'Your password must be at least 5 characters long!').max(30, 'Your password is too long!'),
})