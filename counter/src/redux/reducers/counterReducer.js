// parameter state adalah data pusat kita
export const counterReducer = (state = 10, action) => {
  switch (action.type) {
    case "INCREMENT":
      return (state += 1);
    case "DECREMENT":
      return (state -= 1);
    default:
      return state;
  }
};
