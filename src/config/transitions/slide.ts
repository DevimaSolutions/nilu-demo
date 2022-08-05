import { keyframes } from '@emotion/react';

export const slideAnimations = {
  leaveToLeft: keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-25%);
      filter: brightness(0.5);
    }`,
  enterFromLeft: keyframes`
    from {
      transform: translateX(-25%);
      filter: brightness(0.5);
    }
    to {
      transform: translateX(0);
    }`,
  leaveToRight: keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }`,
  enterFromRight: keyframes`
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }`,
};

const slide = {
  '.slide-forward-enter-active': {
    animation: `${slideAnimations.enterFromRight} 300ms both ease-out`,
    zIndex: 1,
  },
  '.slide-forward-exit-active': {
    animation: `${slideAnimations.leaveToLeft} 300ms both ease-out`,
    zIndex: 0,
  },
  '.slide-backward-enter-active': {
    animation: `${slideAnimations.enterFromLeft} 300ms both ease-out`,
    zIndex: 0,
  },
  '.slide-backward-exit-active': {
    animation: `${slideAnimations.leaveToRight} 300ms both ease-out`,
    zIndex: 1,
  },
};
export default slide;
