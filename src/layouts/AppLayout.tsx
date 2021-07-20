import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box, withStyles, withWidth } from '@material-ui/core';

const Root = withStyles({
  root: {
    display: 'flex',
    maxHeight: '100vh',
  },
})(Box);

const Content = withStyles({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 64,
    padding: 24,
    overflow: 'auto',
  },
})(Box);

export interface IAdminLayoutProps {
  children?: any;
  width?: any;
  [key: string]: any;
}

const AppLayout = ({ children }: IAdminLayoutProps) => {
  return (
    <Root>
      <CssBaseline />
      <Content>{children}</Content>
    </Root>
  );
};

export default withWidth()(AppLayout);
