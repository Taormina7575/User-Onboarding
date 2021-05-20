import { React, useState, useEffect } from "react";
import User from "./Components/User";
import Form from "./Components/Form";
import axios from "axios";
import * as yup from "yup";
import schema from './Validation/FormSchema'

const initialUsers = [
  {
    name: "Vincenzo",
    email: "vinnie.taormina@gmail.com",
    password: "fakepassword",
    terms: true,
  },
];

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  terms: "",
};

const initialDisabled = true;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const change = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    yup
      .reach(schema, name)
      .validate(valueToUse)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })

      .catch((err) => {
        setFormErrors({
          ...formErrors,

          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);


  const submit = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(setFormValues(initialFormValues));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    };
    submit(newUser)
  };

  const [users, setUsers] = useState(initialUsers);

  return (
    <div>
      <Form submit={onSubmit} formValues={formValues} formErrors={formErrors} disabled={disabled} change={change}></Form>
      {users.map((user, idx) => {
        return <User key={idx} userData={user}></User>;
      })}
    </div>
  );
}

export default App;
