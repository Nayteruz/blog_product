import { TIcon } from '@/shared/ui';

export interface ISidebarItem {
  path: string;
  text: string;
  icon?: TIcon;
  authOnly?: boolean;
}
