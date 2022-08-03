const styles = {
  tabs: {
    borderBottom: 1,
    color: 'grey.700',
    borderColor: 'grey.400',
  },
  tabsContainer: {
    '& > div > div': {
      justifyContent: 'center',
    },
  },
} as const;

export default styles;
