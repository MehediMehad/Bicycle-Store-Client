import { ReactNode } from "react";

export type TSidebarItem = {
  name?: string;
  key: string;
  label: ReactNode;
  Icon?: ReactNode;
  children?: TSidebarItem[];
};

export type TAdminSidebarItem = {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  children?: TAdminSidebarItem[];
};

export type TRoute = {
  path: string;
  element: React.ReactNode;
};
