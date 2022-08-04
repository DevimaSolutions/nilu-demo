import { Avatar, CircularProgress, Stack, Typography, Button, Box } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import PaymentCheckmarkIcon from '@/components/icons/PaymentCheckmarkIcon';
import { shopCreatorSelector, shopSelectedOptionSelector } from '@/redux/shop';
import { getUserInitials } from '@/utils/get-user-initials';
import mergeSx from '@/utils/merge-sx';

import PrivateMessageIcon from '../icons/PrivateMessageIcon';

import styles from './styles';

import type { IPaymentFormProps } from './types';

const PaymentForm = ({ onSuccess }: IPaymentFormProps) => {
  const creator = useSelector(shopCreatorSelector);
  const selectedProductOption = useSelector(shopSelectedOptionSelector);
  const [status, setStatus] = useState<'initial' | 'loading' | 'success'>('initial');

  const onPay = () => {
    setStatus('loading');
    setTimeout(setStatus, 1000, 'success');
    setTimeout(onSuccess, 1500);
    // reset state after close animation
    setTimeout(setStatus, 1800, 'initial');
  };
  return (
    <>
      {status === 'loading' && (
        <Box sx={styles.centeredContainer}>
          <CircularProgress />
        </Box>
      )}
      {status === 'success' && (
        <Box sx={styles.centeredContainer}>
          <PaymentCheckmarkIcon color="primary" sx={styles.success} />
        </Box>
      )}
      {status === 'initial' && (
        <Stack>
          <Typography variant="body2" textAlign="center">
            You are going to pay
          </Typography>
          <Typography variant="h2" fontWeight={600} textAlign="center">
            $ {selectedProductOption?.price?.toFixed(2)} USD
          </Typography>
          <Typography textAlign="center" sx={styles.toMessage}>
            to{' '}
            <Avatar alt={creator?.fullName} src={creator?.image ?? undefined} sx={styles.avatar}>
              {creator?.fullName ? getUserInitials(creator.fullName) : undefined}
            </Avatar>{' '}
            {creator?.username} <PrivateMessageIcon /> private message
          </Typography>
          <Typography textAlign="center">
            Note: No worries, your money will be refunded if there is a 7 days quiteness on the
            creator side.
          </Typography>
          <Button
            variant="contained"
            sx={mergeSx(styles.button, styles.buttonContained)}
            onClick={onPay}
          >
            Pay with Apple Pay
          </Button>
          <Button sx={styles.button}>Pay with Credit Card</Button>
          <Button sx={styles.button}>Other options</Button>
        </Stack>
      )}
    </>
  );
};

export default PaymentForm;
