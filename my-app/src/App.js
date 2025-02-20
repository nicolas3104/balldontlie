import { useState, useEffect } from "react";

const phrases = [
  "don't lie",
  "is truth",
  "is justice",
  "never fails",
  "is pure",
  "decides fate",
  "sets you free",
  "rules all",
  "never cheats",
  "speaks loud",
  "defines greatness",
  "is the law"
];


export default function App() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("ball " + phrases[0]);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (deleting) {
        if (charIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        if (charIndex < phrases[index].length) {
          setDisplayText("ball " + phrases[index].slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setDeleting(true), 1000);
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, [charIndex, deleting, index]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
      }}
    >
      <div style={{ color: "white", fontSize: "5rem", fontWeight: "bold", textAlign: "center" }}>
        {displayText}
      </div>
    </div>
  );
}
