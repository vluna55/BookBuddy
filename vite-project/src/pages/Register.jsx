import React, { useState } from "react";
import Input from "../components/Input";
import { register } from "../API";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [registrationStatus, setRegistrationStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("submit function");
    const res = await register(fName, lName, email, password);

    if (res.success) {
      setRegistrationStatus("Registration successful!");
    } else {
      setRegistrationStatus("Registration failed. Please try again.");
    }
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          text="First Name"
          type="text"
          state={fName}
          setState={setFName}
        />
        <Input text="Last Name" type="text" state={lName} setState={setLName} />
        <Input text="Email" type="email" state={email} setState={setEmail} />
        <Input
          text="Password"
          type="password"
          state={password}
          setState={setPassword}
        />
        <button type="submit">Submit</button>
      </form>
      {registrationStatus && <p>{registrationStatus}</p>}
    </div>
  );
};

export default Register;
