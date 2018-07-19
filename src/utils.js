import React from '../../../../.cache/typescript/2.9/node_modules/@types/react';

export const wrapWithSlide = Component => {
  return class WrappedComponent extends React.Component {
    render() {
      return (
        <div hasSlideChildren>
          <Component />
        </div>
      );
    }
  };
};
