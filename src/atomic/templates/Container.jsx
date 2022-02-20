import React from 'react';
import { Children } from 'react/cjs/react.production.min';

function Container({ children }) {
  return <div className="flex justify-center">{children}</div>;
}

export default Container;
