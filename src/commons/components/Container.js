import React from 'react';

const Container = ({ children }) => {
  const containerStyle = {
    width: '1400px',
    minHeight: '720px',
    margin: 'auto',
    padding: '20px',
    boxSizing: 'border-box',
  };

  return <div style={containerStyle}>{children}</div>;
};

export default React.memo(Container);
