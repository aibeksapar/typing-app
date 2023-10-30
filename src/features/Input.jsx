function Input() {
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
  return (
    <div className="pt-5 pb-10 px-[50px] bg-emerald-950/50 rounded-lg flex flex-wrap gap-x-[16px] text-2xl gap-y-[5px] font-medium">
      {words.map((word, index) => (
        <div className="word" key={index}>
          {word.split("").map((letter, i) => (
            <span className="correct text-emerald-300" key={i}>
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Input;
