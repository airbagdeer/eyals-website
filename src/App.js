import CustomParticles from "./CustomParticles";
import "./App.css";
import { useEffect, useState } from "react";
import Name from "./name";
import TestTest from "./test1";
import { Buttons } from "./buttons";

const App = () => {
  // let nameClass = "name";
  // setTimeout(() => {
  //   nameClass = "name moveUp";
  //   console.log(nameClass);
  // }, 2000);

  return (
    <>
      {/*<TestTest></TestTest>*/}
      <CustomParticles></CustomParticles>
    </>
  );
};

export default App;
