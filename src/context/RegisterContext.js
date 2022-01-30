import { createContext, useState } from "react";
import React from 'react';

export const RegisterContext = createContext("Working")


const Register = ({ children })  => {
    const [formFields, setFormFields] = useState(null)

    return (
        <RegisterContext.Provider value={{ formFields, setFormFields }} >
            { children && children }
        </RegisterContext.Provider>
    )
}

export default Register