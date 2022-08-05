import fadeQuick from '@/config/transitions/fade-quick';

const styles = {
  container: {
    minWidth: 75,
    ...fadeQuick,
  },
  link: {
    p: 0,
    color: 'grey.800',
    textDecoration: 'none',
  },
} as const;

export default styles;
