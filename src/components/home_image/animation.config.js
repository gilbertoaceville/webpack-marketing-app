export const heroImageWrapper = {
  initial: {
    y: -1000,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.8,
      type: "spring",
    },
  },
};

export const heroImage = {
  initial: {},
  animate: {
    y: [30, 0, 30],
    transition: {
      duration: 1.6,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export const subImagesContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 3,
    },
  },
};

export const subImageWrapper = {
  initial: {
    y: -800,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
    },
  },
};

export const subImage = {
  initial: {},
  animate: (i) => ({
    x: [20, 0, 20],
    transition: {
      delay: 0,
      duration: 1*i,
      ease: "linear",
      repeat: Infinity,
    },
  }),
};
