import {
  Container,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const onType = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onRegister = () => {
    console.log(user);
    axios
      .post("http://localhost:2000/users/register", user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container bg={"salmon"} style={{ marginTop: "50px" }}>
      <h1>Register Page</h1>
      <Input
        placeholder="Input Username"
        name="username"
        onChange={(e) => onType(e)}
      />
      <Input
        placeholder="Input Email"
        name="email"
        onChange={(e) => onType(e)}
      />
      <Input
        placeholder="Input Password"
        type="password"
        name="password"
        onChange={(e) => onType(e)}
      />
      <Button colorScheme="teal" onClick={onRegister}>
        Register
      </Button>
    </Container>
  );
};

export default Register;
