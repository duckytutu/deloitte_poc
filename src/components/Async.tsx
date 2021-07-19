import React, { ComponentProps } from 'react';

import Loader from './Loader';

const sleep = (m: number) => new Promise((r) => setTimeout(r, m));

export default function asyncComponent(importComponent: any): any {
  class AsyncComponent extends React.Component {
    constructor(props: ComponentProps<any>) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      await sleep(150);

      const { default: component } = await importComponent();

      this.setState({
        component,
      });
    }

    render() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const { component: C } = this.state;
      console.log(C);

      // eslint-disable-next-line react/jsx-props-no-spreading
      return C ? <C {...this.props} /> : <Loader />;
    }
  }

  return AsyncComponent;
}
