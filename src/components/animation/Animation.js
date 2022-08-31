/** @format */

export const sideAnimation = {
  parent: {
    hidden: { x: 800 },
    show: {
      x: 0,
      transition: {
        delayChildren: 0.5,
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    hide: { opacity: 0 },
  },
  child: {
    hidden: { x: 400 },
    show: { x: 0, transition: { type: "spring", mass: 2, duration: 1.5 } },
  },
};
