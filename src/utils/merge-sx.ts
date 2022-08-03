import type { SystemStyleObject, SxProps } from '@mui/system';

const mergeSx = <Theme extends object = {}>(
  ...args: (SxProps<Theme> | undefined)[]
): SxProps<Theme> => {
  return args.reduce<
    ReadonlyArray<boolean | SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)>
  >((acc, param) => {
    if (typeof param === 'undefined') {
      return acc;
    }
    // unwrap array parameters if passed
    return Array.isArray(param) ? [...acc, ...param] : [...acc, param];
  }, []);
};

export default mergeSx;
