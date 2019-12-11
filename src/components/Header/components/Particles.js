import React from "react";
import Particles from "react-particles-js";


const ParticlesContainer = () => (
  <Particles
    className="particles"
    params={{
      "particles": {
        "number": {
          "value": 150
        },
        "size": {
          "value": 3
        },
        "move": {
          "speed": 7
        },
      },
      "interactivity": {
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          }
        }
      }
    }}/>
);

export default ParticlesContainer;
