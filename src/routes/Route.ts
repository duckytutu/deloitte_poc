import { ComponentType } from 'react';

export default interface IRoute {
  id?: string;
  path: string;
  icon?: any;
  name?: string;
  component?: ComponentType;
  children?: IRoute[] | null;
  layout?: ComponentType;
}
