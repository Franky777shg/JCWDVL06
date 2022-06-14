import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

// SET UP REDUX
import { createStore } from "redux"; // untuk menciptakan store
import { Provider } from "react-redux"; // untuk pembungkus setiap komponen agar terhubung dengan redux
import { counterReducer } from "./redux/reducers/counterReducer"; // import reducer yang sudah kita buat

// pembuatan global store menggunakan create store
const globalStore = createStore(counterReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // semua komponen kita dibungkus ke dalam Provider
  <Provider store={globalStore}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
);
