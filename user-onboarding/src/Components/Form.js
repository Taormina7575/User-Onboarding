import { React } from "react";
import styled from "styled-components";

const FormName = styled.h1`
  font-size: 5rem;
  text-align: center;
`;

const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const FormLabel = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const Submit = styled.button`
  font-size: 3rem;
  border: 1px solid green;
  color: green;
  &:hover {
      cursor: pointer;
  }
  &:disabled {
    border: 1px solid red;
    color: red;
    cursor: default;
  }
`;
const Errors = styled.div`
  font-size: 2rem;
  color: red;
  text-align: center;
`;

const NewInput = styled.input`
  border: 1px solid black;
`;

export default function Form({submit, formValues, formErrors, change, disabled}) {

  return (
    <div>
      <FormName>Enter New User</FormName>
      <UserForm onSubmit={submit}>
        <FormLabel>
          Name
          <NewInput
            type="text"
            name="name"
            value={formValues.name}
            onChange={change}
          ></NewInput>
        </FormLabel>
        <FormLabel>
          Email
          <NewInput
            type="email"
            name="email"
            value={formValues.email}
            onChange={change}
          ></NewInput>
        </FormLabel>
        <FormLabel>
          Password
          <NewInput
            type="text"
            name="password"
            value={formValues.password}
            onChange={change}
          ></NewInput>
        </FormLabel>
        <FormLabel>
          Terms and Conditions
          <NewInput
            type="checkbox"
            name="terms"
            checked={formValues.terms}
            onChange={change}
          ></NewInput>
        </FormLabel>
        <Submit disabled={disabled} id={'subBtn'}>Submit</Submit>
        <Errors>
          <p>{formErrors.name}</p>
          <p>{formErrors.email}</p>
          <p>{formErrors.password}</p>
          <p>{formErrors.terms}</p>
        </Errors>
      </UserForm>
    </div>
  );
}
