import { Link } from '@mui/material';
import { useState } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

import styles from './styles';

import type { ReactLinesEllipsisProps } from 'react-lines-ellipsis';

const SeeMoreText = ({
  text,
  maxLine = 2,
  basedOn = 'words',
  ...props
}: Omit<ReactLinesEllipsisProps, 'ellipsis'>) => {
  const [isExpanded, setExpanded] = useState(false);

  return isExpanded ? (
    <>
      {text}{' '}
      <Link sx={styles.seeMore} onClick={() => setExpanded(false)}>
        See less
      </Link>
    </>
  ) : (
    <LinesEllipsis
      text={text}
      maxLine={maxLine}
      ellipsis={
        (
          <>
            ...{' '}
            <Link sx={styles.seeMore} onClick={() => setExpanded(true)}>
              See more
            </Link>
          </>
        ) as unknown as string
      }
      basedOn={basedOn}
      {...props}
    />
  );
};

export default SeeMoreText;
