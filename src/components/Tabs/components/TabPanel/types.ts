import type { HTMLAttributes } from 'react';

export interface ITabPanelProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  value: number | null;
  index: number;
}
