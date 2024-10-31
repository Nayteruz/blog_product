import { ReactNode } from 'react';

export interface ISidebarItem {
  path: string;
  text: string;
  icon?: ReactNode;
  authOnly?: boolean;
}
