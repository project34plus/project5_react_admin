import React from 'react';

const Container2 = ({ children }) => {
  const containerStyle = {
    width: '1400px',
    minHeight: '820px',
    margin: 'auto',
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
  };

  return <div style={containerStyle}>{children}</div>;
};

export default React.memo(Container2);
