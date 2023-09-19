import { useState } from "react";

const Button = () => {
  const [num, setNum] = useState(0);
  return (
    <button onClick={() => setNum((prev) => prev + 1)}>
      You've clicked me {num} times.
    </button>
  );
};

export default Button;
