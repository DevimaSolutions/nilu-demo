import { Avatar, Stack, Typography, Button } from '@mui/material';

import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import SeeMoreText from '@/components/SeeMoreText';
import { getUserInitials } from '@/utils/get-user-initials';

import styles from './styles';
import usePrivateMessagePage from './usePrivateMessagePage';

const PrivateMessagePage = () => {
  const { creator, description, options, onSelectOption } = usePrivateMessagePage();
  return (
    <Stack alignItems="center">
      <Typography variant="subtitle1" sx={styles.title}>
        {creator ? (
          <>
            Message{' '}
            <Avatar alt={creator?.fullName} src={creator?.image ?? undefined} sx={styles.avatar}>
              {creator?.fullName ? getUserInitials(creator.fullName) : undefined}
            </Avatar>{' '}
            <strong>{creator.username}</strong>
          </>
        ) : (
          <> &nbsp;</>
        )}
      </Typography>
      <Typography component="div" textAlign="center" mb={2.5}>
        {description ? (
          <SeeMoreText text={description} />
        ) : (
          <>
            &nbsp;
            <br />
            &nbsp;
          </>
        )}
      </Typography>
      {options.map((option) => (
        <Button sx={styles.option} key={option.id} onClick={onSelectOption(option)}>
          <span>{option.name}</span>
          <span>${option.price}</span>
          <ArrowRightIcon sx={styles.nextIcon} />
        </Button>
      ))}
    </Stack>
  );
};

export default PrivateMessagePage;
