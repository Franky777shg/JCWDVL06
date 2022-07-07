import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login";
import Register from "./Register";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <Register />
  </ChakraProvider>
);
