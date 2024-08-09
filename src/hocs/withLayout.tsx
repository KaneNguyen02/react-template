import React from 'react';

interface WithChildrenProps {
  children: React.ReactNode;
}

function withLayout<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  Layout: React.ComponentType<WithChildrenProps>
) {
  return function WithLayoutComponent(props: P) {
    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    );
  };
}

export default withLayout;