import { Dialog as MuiDialog, Slide } from '@mui/material';
import { forwardRef } from 'react';

import type { DialogProps, SlideProps } from '@mui/material';

export const DialogTransition = forwardRef(function Transition(props: SlideProps, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialog(props: DialogProps) {
  return <MuiDialog TransitionComponent={DialogTransition} keepMounted {...props} />;
}
