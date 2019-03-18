import React, { Component } from "react";
import Particles from "react-particles-js";

import deer from "./small-deer.2a0425af.svg";

class Canvas extends Component {
  state = { width: "0px", height: "0px" };
  render() {
    const { width, height } = this.state;
    console.log(width, height);
    return (
      <Particles
        params={{
          fps_limit: 28,
          particles: {
            number: {
              value: 200,
              density: {
                enable: false
              }
            },
            line_linked: {
              enable: true,
              distance: 30,
              opacity: 0.4
            },
            move: {
              speed: 1
            },
            opacity: {
              anim: {
                enable: true,
                opacity_min: 0.05,
                speed: 2,
                sync: false
              },
              value: 0.4
            }
          },
          polygon: {
            enable: true,
            scale: 0.5,
            type: "inline",
            move: {
              radius: 10
            },
            url: deer,
            inline: {
              arrangement: "equidistant"
            },
            draw: {
              enable: true,
              stroke: {
                color: "rgba(255, 255, 255, .2)"
              }
            }
          },
          retina_detect: false,
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              }
            },
            modes: {
              bubble: {
                size: 6,
                distance: 40
              }
            }
          }
        }}
      />
    );
  }
}

export default Canvas;
