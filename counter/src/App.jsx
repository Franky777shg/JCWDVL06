import { Button, Container, Heading } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions/counterActions";

function App() {
  // connect to reducer with useSelector
  const { counter } = useSelector((state) => {
    return {
      counter: state,
    };
  });

  const dispatch = useDispatch();

  const onDecrement = () => {
    // dispatch action decrement
    dispatch(decrement());
  };

  const onIncrement = () => {
    // dispatch action increment
    dispatch(increment());
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
        <Button colorScheme="red" variant="solid" onClick={onDecrement}>
          -
        </Button>
        <Heading style={{ fontSize: "10rem" }}>{counter}</Heading>
        <Button colorScheme="green" variant="solid" onClick={onIncrement}>
          +
        </Button>
      </Container>
    </>
  );
}

export default App;
