export const ParticlesConfig = {
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 250,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  // background: {
  //   color: "#273315",
  //   image: "",
  //   position: "50% 50%",
  //   repeat: "no-repeat",
  //   size: "cover",
  // },
};

//light green #55A76F
//#45E9BA EYAL HAGAYYYYYYYYYY
//#273315
//#3FC7A0
//#30D6A7
//#5FC0C6
//#6480CA THIS IS A GOOD ONE
//#90CA64
//#64CAA7
//#4DB993 THIS IS ALSO
//#5898B4
//#55A76F
