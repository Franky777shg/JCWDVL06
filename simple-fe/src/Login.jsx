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

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [loginState, setLoginState] = useState({
    loginSuccess: false,
    loginError: false,
    message: "",
  });

  const onType = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onLogin = () => {
    axios
      .post("http://localhost:2000/users/login", user)
      .then((res) => {
        // console.log(res.data);
        setLoginState({ loginSuccess: true, message: res.data });
      })
      .catch((err) => {
        // console.log(err);
        setLoginState({ loginError: true, message: err.response.data });
      });
  };

  return (
    <Container bg={"salmon"} style={{ marginTop: "50px" }}>
      {loginState.loginSuccess ? (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>{loginState.message}</AlertTitle>
          <AlertDescription>Welcome, {user.username}</AlertDescription>
        </Alert>
      ) : null}
      {loginState.loginError ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{loginState.message}</AlertTitle>
          <AlertDescription>Try Again</AlertDescription>
        </Alert>
      ) : null}
      <h1>Login Page</h1>
      <Input
        placeholder="Input Username"
        name="username"
        onChange={(e) => onType(e)}
      />
      <Input
        placeholder="Input Password"
        type="password"
        name="password"
        onChange={(e) => onType(e)}
      />
      <Button colorScheme="teal" onClick={onLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
