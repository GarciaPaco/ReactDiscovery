import React, {useState} from "react";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {UserServices} from "../../services/user.services";
import {User} from "../../services/user/user.dto";
export function FormCreateUser() {
    const userServices = new UserServices();
    const [user, setUser] = useState<User | null>(null);

    return (
        <div>
            <h1>Add user to the listing</h1>
            <Formik
                   initialValues={new User()}
                   validationSchema={Yup.object({
                       last_name: Yup.string()
                           .max(25, 'Must be 25 characters or less')
                           .required('Required'),
                       first_name: Yup.string()
                           .max(30, 'Must be 30 characters or less')
                           .required('Required'),
                       email: Yup.string().email('Invalid email address').required('Required'),
                   })}
                   onSubmit={(values, { setSubmitting }) => {
                       setTimeout(() => {
                           console.log(values);
                           userServices.create(values)
                               .then((response) => console.log(response));
                           setSubmitting(false);

                       }, 100);
                   }}
            >
                    <Form>
                        <label htmlFor="last_name">First Name</label>
                        <Field name="last_name" type="text" />
                        <ErrorMessage name="last_name" />

                        <label htmlFor="first_name">Last Name</label>
                        <Field name="first_name" type="text" />
                        <ErrorMessage name="first_name" />

                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" />

                        <button type="submit">Submit</button>
                    </Form>

            </Formik>
        </div>
    );
}