const fadeDelayed = {
  '.fade-delayed-enter': {
    opacity: 0,
  },
  '.fade-delayed-exit': {
    opacity: 1,
  },
  '.fade-delayed-enter-active': {
    opacity: 1,
  },
  '.fade-delayed-exit-active': {
    opacity: 0,
  },
  '.fade-delayed-enter-active, .fade-delayed-exit-active': {
    transition: 'opacity 300ms ease 100ms',
  },
};

export default fadeDelayed;
