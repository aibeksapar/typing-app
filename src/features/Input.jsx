import { useEffect, useRef, useState } from "react";
const words = [
  "again",
  "to",
  "day",
  "keep",
  "change",
  "about",
  "into",
  "some",
  "never",
  "however",
  "come",
  "do",
  "could",
  "people",
  "during",
  "tell",
  "here",
  "seem",
  "which",
  "on",
  "group",
  "word",
  "show",
  "she",
  "problem",
  "tell",
  "large",
  "leave",
  "new",
  "should",
  "order",
  "lead",
  "same",
  "since",
  "word",
  "may",
  "all",
  "develop",
  "last",
  "set",
  "program",
  "must",
  "with",
];

function Input() {
  const [userInputs, setUserInputs] = useState([]);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const inputRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setIsFocused(true);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleDivClick() {
    setIsFocused(true);
    inputRef.current.focus();
  }

  function handleBlur() {
    setIsFocused(false);
  }

  function processWord(input, keyPressed) {
    if (keyPressed === " ") {
      setActiveWordIndex((i) => i + 1);
      setCurrentInput("");
    } else {
      setCurrentInput(input);
      setUserInputs((inputs) => {
        const newInputs = [...inputs];
        newInputs[activeWordIndex] = input;
        return newInputs;
      });
    }
  }

  function handleKeyDown(e) {
    const key = e.key;
    if (key.length === 1) {
      if (key === " " && currentInput !== "") {
        processWord(currentInput, key);
      } else if (key !== " ") {
        processWord(currentInput + key, key);
      }
    } else if (key === "Backspace") {
      processWord(currentInput.slice(0, -1), key);
    }

    if (e.key.length === 1 && e.key !== " ") {
      setCursorPosition((prev) => prev + 1);
    } else if (e.key === "Backspace") {
      setCursorPosition((prev) => Math.max(0, prev - 1));
    } else if (e.key === " " && currentInput !== "") {
      setCursorPosition(0);
    }
  }

  return (
    <div
      className="pt-5 pb-10 px-[50px] bg-emerald-950/50 rounded-lg flex flex-wrap gap-x-[16px] text-2xl gap-y-[5px] font-medium"
      onClick={handleDivClick}
      onBlur={handleBlur}
      tabIndex="0"
    >
      {words.map((word, index) => (
        <span
          key={index}
          className={`word${index === activeWordIndex ? " active" : ""}`}
        >
          {word.split("").map(
            (letter, i) => (
              console.log(word.length),
              (
                <span
                  className={
                    userInputs[index] && userInputs[index].split("").at(i)
                      ? letter === userInputs[index].split("").at(i)
                        ? "correct font-bold text-[#fff]"
                        : "incorrect font-bold text-[#e84858]"
                      : "text-emerald-600"
                  }
                  key={i}
                >
                  {i === cursorPosition && index === activeWordIndex && (
                    <span
                      className={`blinking-cursor${
                        !cursorPosition ? " blinking" : ""
                      }`}
                    ></span>
                  )}
                  {letter}
                  {i + 1 === word.length &&
                    i + 1 === cursorPosition &&
                    index === activeWordIndex && (
                      <span
                        className={`blinking-cursor${
                          !cursorPosition ? " blinking" : ""
                        }`}
                      ></span>
                    )}
                </span>
              )
            )
          )}
        </span>
      ))}
      <input
        type="text"
        value={currentInput}
        onChange={() => {}}
        onKeyDown={handleKeyDown}
        style={{
          position: "absolute",
          left: "-9999px",
        }}
        ref={inputRef}
      />
      {!isFocused && (
        <div className="cover">Click here or start typing to focus</div>
      )}
    </div>
  );
}

export default Input;
