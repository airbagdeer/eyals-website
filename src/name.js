import "./App.css";
import { useEffect, useState } from "react";
import { alphabet } from "./alphabet";
export default function Name() {
  const myName = "Eyal_Stolov";
  let index = 1;

  const [name, setName] = useState("EXXXXXXXXXX");

  function getRandomLetters(amount) {
    let randomString = "";
    for (let i = 0; i < amount; i++) {
      const randomNumber = Math.floor(Math.random() * 36);
      randomString = randomString.concat(alphabet[randomNumber]);
    }
    return randomString;
  }

  function createRandomStringFromName(startIndex) {
    return myName
      .slice(0, startIndex)
      .concat(getRandomLetters(myName.length - startIndex));
  }

  useEffect(() => {
    const testInt = setInterval(() => {
      index = index + 1 / 4;
      let generated = createRandomStringFromName(index);
      if (index === myName.length) {
        clearInterval(testInt);
      }
      setName(createRandomStringFromName(index));
    }, 80);
  }, []);

  return (
    <>
      <h1 className="name">{name}</h1>
    </>
  );
}
