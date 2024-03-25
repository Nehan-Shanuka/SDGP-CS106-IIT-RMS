/* eslint-disable react/prop-types */
import { useTypewriter } from "react-simple-typewriter";

export default function SimpleTypewriter({ words, text }) {
  const [typeEffect] = useTypewriter({
    words: words,
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <h1 style={{ margin: "1rem 2rem 2rem", fontSize: "30px" }}>
      {text}
      <span style={{ fontWeight: "bold", color: "green" }}>{typeEffect}</span>
    </h1>
  );
}
