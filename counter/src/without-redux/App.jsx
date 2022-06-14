import { useState } from "react";
import { Button, Container, Heading } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(5);
  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Heading size="4xl" style={{ textAlign: "center" }}>
        Counter App
      </Heading>
      <Container
        maxW="md"
        bg="lightblue"
        style={{
          display: "flex",
          height: "30vh",
          marginTop: "100px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        borderRadius="lg"
      >
        <Button colorScheme="red" variant="solid" onClick={decrement}>
          -
        </Button>
        <Heading style={{ fontSize: "10rem" }}>{count}</Heading>
        <Button colorScheme="green" variant="solid" onClick={increment}>
          +
        </Button>
      </Container>
    </>
  );
}

export default App;
