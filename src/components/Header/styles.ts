import { dimensions } from '@/config/theme';

const styles = {
  container: {
    position: 'fixed',
    display: 'flex',
    zIndex: 1,
    backgroundColor: 'common.white',
    width: '100%',
    maxWidth: '600px',
    height: dimensions.headerHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    px: 2,
    transition: 'border-bottom-color 300ms ease',
    borderBottom: '2px solid',
    borderBottomColor: 'transparent',
  },
  bottomShadow: {
    borderBottomColor: 'grey.400',
  },
} as const;

export default styles;
