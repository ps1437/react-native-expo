import * as Yup from 'yup';

export const LoginValidation = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).max(15).label("Password")
})