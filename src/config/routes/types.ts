import type { RootState } from '@/redux/store';
import type { ReactNode } from 'react';

export interface IRoute {
  path: string;
  element: ReactNode;
  title?: string | ((store: RootState) => string);
  // Defines wether we should switch header to layout that has a back button (default is `false`)
  canGoBack?: boolean;
  // Defines wether shadow should be shown under the header always (default is `false`)
  alwaysHasShadowUnderHeader?: boolean;
}
