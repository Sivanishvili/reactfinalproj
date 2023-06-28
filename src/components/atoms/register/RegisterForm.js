import React from "react";
import { RegisterForm } from "./components/register";
// import { FormContainer, Input } from "../atoms";
// import { useForm } from "../../hooks";
// import { RegisterFormValues } from "./RegisterFormValues";
// import { Button } from "@mui/material";


export const RegisterPage = () => {
    return <RegisterForm/>;
}

// export const RegisterForm = () => {
//   const { formValues: registerFormValues ,  onFormChange } = useForm(registerFormValues());




//   return (
//     <FormContainer>
//       <Input
//         name="firstName"
//         label="firstName"
//         value={registerFormValues.firstName.value}
//         error={registerFormValues.firstName.error}
//         onChange={onFormChange}
//       />
//       <Input
//         name="lastName"
//         label="lastName"
//         value={registerFormValues.lastName.value}
//         error={registerFormValues.lastName.error}
//         onChange={onFormChange}
//       />
//       <Input
//         name="email"
//         label="email"
//         value={registerFormValues.email.value}
//         error={registerFormValues.email.error}
//         onChange={onFormChange}
//       />
//       <Input
//         name="password"
//         label="password"
//         value={registerFormValues.password.value}
//         error={registerFormValues.password.error}
//         onChange={onFormChange}
//       />
//     </FormContainer>
//   );
// };
