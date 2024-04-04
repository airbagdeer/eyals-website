import React from "react";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

export const HackTextTest = ({
  word = "Loading",
  colors = {},
  textSize = "",
}) => {
  const [readyIndex, setReadyIndex] = React.useState(0);
  const [letterRenderingKey, setLetterRenderingKey] = React.useState(1);
  const readyIndexRef = React.useRef(readyIndex);
  readyIndexRef.current = readyIndex;

  React.useEffect(() => {
    setTimeout(wrtie, 30);
    setTimeout(inc, 1000);
  });

  function inc() {
    if (readyIndexRef.current < word.length) {
      setReadyIndex((prevReadyIndex) => prevReadyIndex + 1);
      setTimeout(inc, 3000);
    }
  }

  function wrtie() {
    if (readyIndexRef.current < word.length) {
      setLetterRenderingKey(Math.floor(Math.random() * 1000));
      setTimeout(wrtie, 30);
    }
  }
  // @ts-ignore
  // @ts-ignore
  return (
    <div
      // className="react-hack-text"
      style={{
        ...(textSize && { fontSize: textSize }),
        ...(colors.textColor && { color: colors.textColor }),
        ...(colors.textShadowColor && {
          textShadow: `0 0 15px ${colors.textShadowColor}`,
        }),
      }}
    >
      {word &&
        [...word].map((l, index) => {
          return (
            <Letter
              colors={colors}
              key={`${l}-${index}-${readyIndex >= index || letterRenderingKey}`}
              letter={l}
              readyToShow={readyIndex >= index}
            />
          );
        })}
    </div>
  );
};

const Letter = ({ letter = "", readyToShow = false, colors = {} }) => {
  return (
    <React.Fragment>
      {readyToShow && (
        <span
          // className="glow"
          style={{
            ...(colors.textGlowColor && { color: colors.textGlowColor }),
            ...(colors.textGlowShadowColor && {
              textShadow: `0 0 10px ${colors.textGlowShadowColor}`,
            }),
          }}
        >
          {letter}
        </span>
      )}
      {!readyToShow && <span>{alphabet[Math.floor(Math.random() * 36)]}</span>}
    </React.Fragment>
  );
};
