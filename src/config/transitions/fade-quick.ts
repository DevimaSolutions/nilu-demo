const fadeQuick = {
  '.fade-quick-enter': {
    opacity: 0,
  },
  '.fade-quick-exit': {
    opacity: 1,
  },
  '.fade-quick-enter-active': {
    opacity: 1,
  },
  '.fade-quick-exit-active': {
    opacity: 0,
  },
  '.fade-quick-enter-active, .fade-quick-exit-active': {
    transition: 'opacity 100ms ease',
  },
};

export default fadeQuick;
