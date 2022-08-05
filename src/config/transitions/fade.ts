const fade = {
  '.fade-enter': {
    opacity: 0,
  },
  '.fade-exit': {
    opacity: 1,
  },
  '.fade-enter-active': {
    opacity: 1,
  },
  '.fade-exit-active': {
    opacity: 0,
  },
  '.fade-enter-active, .fade-exit-active': {
    transition: 'opacity 300ms ease',
  },
};

export default fade;
