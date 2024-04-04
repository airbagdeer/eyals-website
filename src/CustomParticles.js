import { loadFull } from "tsparticles";
import { ParticlesConfig } from "./particles-config";
import "./App.css";
import Particles from "react-particles";
import Name from "./name";
import { Buttons } from "./buttons";
export default function CustomParticles() {
  const particlesInit = async (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <Particles
      className="particles-js"
      init={particlesInit}
      options={ParticlesConfig}
    >
      <h1>TEST</h1>
      <div className="page">
        <div className="info-box">
          <div className="name-box">
            <Name></Name>
          </div>
          <Buttons></Buttons>
        </div>
      </div>
    </Particles>
  );
}
