import * as Yup from 'yup';

export const LoginRegisterSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).max(15).label("Password"),
    name: Yup.string().required().label("Name"),
    cfpassword: Yup.string().required().min(8).max(15).label("Confirm Password")
    .test('passwords-match', 'Passwords must match', function(value) {
        return this.parent.password === value;
      }),

})